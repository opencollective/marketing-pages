"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import FeatureSection from "./FeatureSection";
import SimpleFeaturesEditor from "./SimpleFeaturesEditor";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { FeatureSections } from "@/lib/schemas/feature-section-schema";
import { featureSections as defaultFeatureSections } from "@/data/feature-sections";

const LOCAL_STORAGE_KEY = "features-editor-data";

export default function Features({}) {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [featureSections, setFeatureSections] = useState<FeatureSections>(
    defaultFeatureSections
  );

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

  // Handle section becoming visible
  const handleSectionVisible = useCallback((index: number) => {
    setActiveIndex(index);
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
    setFeatureSections(data);
    setActiveSectionItems(data.map(() => 0)); // Reset active items when data changes
  };

  return (
    <section className="py-24 px-6 flex gap-18 relative" ref={containerRef}>
      <div className="w-4/10 py-40">
        {featureSections.map((section, sectionIndex) => (
          <FeatureSection
            key={`${section.title}-${sectionIndex}`}
            section={section}
            sectionIndex={sectionIndex}
            onItemSelect={(itemIndex) =>
              handleItemSelect(sectionIndex, itemIndex)
            }
            isActive={activeIndex === sectionIndex}
            onBecomeVisible={handleSectionVisible}
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
                          "rounded-4xl border w-full overflow-clip aspect-square transition-opacity relative",
                          "bg-gradient-to-b from-primary/80 to-primary/100",
                          isActive ? "opacity-100" : "opacity-0"
                        )}
                      >
                        {img && (
                          <div
                            className={cn(
                              "w-full relative h-full flex items-center justify-center"
                            )}
                            style={img.containerStyle}
                          >
                            {img.src.startsWith("/") ? (
                              <Image
                                src={img.src}
                                width={img.srcWidth}
                                height={img.srcHeight}
                                alt={img.alt ?? item.title}
                                style={img.style}
                              />
                            ) : (
                              <img
                                src={img.src}
                                style={img.style}
                                width={img.srcWidth}
                                height={img.srcHeight}
                                alt={img.alt ?? item.title}
                              />
                            )}
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
      <div className="fixed right-6 top-6">
        <SimpleFeaturesEditor onSave={handleSaveFeatures} />
      </div>
    </section>
  );
}
