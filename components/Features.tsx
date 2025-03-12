"use client";
import React, { useState, useEffect, useRef } from "react";
import FeatureSection from "./FeatureSection";
import SimpleFeaturesEditor from "./SimpleFeaturesEditor";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { FeatureSections } from "@/lib/schemas/feature-section-schema";
import { featureSections as defaultFeatureSections } from "@/data/feature-sections";

const LOCAL_STORAGE_KEY = "features-editor-data";
console.log("Features component using LOCAL_STORAGE_KEY:", LOCAL_STORAGE_KEY);

export default function Features({}) {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [featureSections, setFeatureSections] = useState<FeatureSections>(
    defaultFeatureSections
  );
  // Create refs for each feature section
  const sectionRefs = useRef<Array<HTMLDivElement | null>>([]);

  // Track active sub-items for each section
  const [activeSectionItems, setActiveSectionItems] = useState<number[]>(
    featureSections.map(() => 0) // Initialize with index 0 for each section
  );

  // Load feature sections from localStorage if available
  useEffect(() => {
    const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        setFeatureSections(parsedData);
        setActiveSectionItems(parsedData.map(() => 0)); // Reset active items when data changes
      } catch (error) {
        console.error("Failed to parse saved feature sections:", error);
      }
    }
  }, []);

  // Check if each section is in view
  useEffect(() => {
    // Create IntersectionObserver instances for each section
    const observers = sectionRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            // If the section is entering the viewport and is more than 20% visible
            if (entry.isIntersecting && entry.intersectionRatio > 0.2) {
              setActiveIndex(index);
            }
          });
        },
        {
          // Options: trigger when 20% of the element is visible
          // Adjust this threshold for earlier/later activation
          threshold: 0.2,
          // Add rootMargin for additional padding/offset
          rootMargin: "-20% 0px -60% 0px", // Trigger earlier (top offset)
        }
      );

      observer.observe(ref);
      return observer;
    });

    // Cleanup observers on unmount
    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  // Handle sub-item selection
  const handleItemSelect = (sectionIndex: number, itemIndex: number) => {
    setActiveSectionItems((prev) => {
      const newActiveSectionItems = [...prev];
      newActiveSectionItems[sectionIndex] = itemIndex;
      return newActiveSectionItems;
    });
  };

  // Handle saving editor changes
  const handleSaveFeatures = (data: FeatureSections) => {
    console.log("handleSaveFeatures called in Features component", { data });
    setFeatureSections(data);
    setActiveSectionItems(data.map(() => 0)); // Reset active items when data changes
  };

  // Add effect to monitor featureSections state changes
  useEffect(() => {
    console.log("Feature sections state updated:", featureSections);
  }, [featureSections]);

  return (
    <section className="py-24 px-4 flex gap-18 relative" ref={containerRef}>
      <div className="w-4/10 py-40">
        <div className="fixed right-6 top-6">
          <SimpleFeaturesEditor onSave={handleSaveFeatures} />
        </div>
        {featureSections.map((section, sectionIndex) => (
          <FeatureSection
            key={`${section.title}-${sectionIndex}`}
            section={section}
            sectionIndex={sectionIndex}
            onItemSelect={(itemIndex) =>
              handleItemSelect(sectionIndex, itemIndex)
            }
            isActive={activeIndex === sectionIndex}
            sectionRef={(el: HTMLDivElement | null) => {
              sectionRefs.current[sectionIndex] = el;
            }}
          />
        ))}
      </div>
      {/* sticky features visuals */}
      <div className="self-stretch w-6/10 relative">
        {/* Sticky container with proper height and centering */}
        <div className="sticky top-[16vh] pt-[74vh] flex justify-start items-center flex-col">
          {/* sticky features box */}
          <div className="absolute inset-[0%] h-full">
            {featureSections.map((section, sectionIndex) => (
              <React.Fragment key={`${section.title}-${sectionIndex}`}>
                {section.items.map((item, itemIndex) => {
                  const img = item.media || section.items[0]?.media;
                  const isActive =
                    activeIndex === sectionIndex &&
                    activeSectionItems[sectionIndex] === itemIndex;
                  const sectionStyle = section.tailwindColor
                    ? ({
                        "--primary": `var(--color-${section.tailwindColor})`,
                      } as React.CSSProperties)
                    : undefined;
                  return (
                    <div
                      key={`${item.title}-${itemIndex}`}
                      className="flex justify-center items-center h-full absolute inset-[0%]"
                      style={sectionStyle}
                    >
                      <div
                        className={cn(
                          "rounded-4xl border overflow-clip aspect-square transition-opacity",
                          "bg-gradient-to-b from-primary/80 to-primary/100",
                          isActive ? "opacity-100" : "opacity-0"
                        )}
                      >
                        {img && (
                          <div
                            className={cn(
                              "w-full h-full flex items-center justify-center"
                              //   img?.containerClasses
                            )}
                            style={img.containerStyle}
                          >
                            <Image
                              src={img.src}
                              width={img.srcWidth}
                              height={img.srcHeight}
                              alt={img.alt ?? item.title}
                              style={img.style}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
