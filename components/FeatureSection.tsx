"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/motion-primitives/accordion";

import { cn } from "@/lib/utils";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import React, { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

export type TFeatureSection = {
  title: string;
  description?: string;
  tailwindColor?: string;
  items: {
    title: string;
    description: string;
    media?: {
      src: string | StaticImport;
      srcWidth: number;
      srcHeight: number;
      alt?: string;
      containerClasses?: string;
      mediaClasses?: string;
      containerStyle?: React.CSSProperties;
      style?: React.CSSProperties;
    };
  }[];
};

export default function FeatureSection({
  section,
  sectionIndex,
  onItemSelect,
  isActive,
  onBecomeVisible,
}: {
  section: TFeatureSection;
  sectionIndex: number;
  onItemSelect: (itemIndex: number) => void;
  isActive: boolean;
  onBecomeVisible: (index: number) => void;
}) {
  const [openItem, setOpenItem] = React.useState<React.Key | null>(
    section.items[0].title
  );
  const sectionRef = useRef<HTMLDivElement>(null);

  // Use Framer Motion's useInView hook instead of manual IntersectionObserver
  const inView = useInView(sectionRef, {
    // Amount of element that needs to be visible (0-1)
    amount: 0.1,
    // Only trigger once? Set to false to keep checking visibility
    once: false,
    // Margin around the root similar to IntersectionObserver rootMargin
    margin: "-10% 0px -40% 0px",
  });

  // When this section comes into view, notify the parent
  useEffect(() => {
    if (inView) {
      onBecomeVisible(sectionIndex);
    }
  }, [inView, sectionIndex, onBecomeVisible]);

  // When an item is opened, update the parent component
  const handleValueChange = (key: React.Key | null) => {
    if (key) {
      setOpenItem(key);

      // Find the index of the opened item
      const itemIndex = section.items.findIndex((item) => item.title === key);
      if (itemIndex !== -1) {
        onItemSelect(itemIndex);
      }
    }
  };

  // Create a style object to locally set the --primary variable if provided
  const sectionStyle = section.tailwindColor
    ? ({
        "--primary": `var(--color-${section.tailwindColor})`,
      } as React.CSSProperties)
    : undefined;

  return (
    <div className="pb-[30dvh] last:pb-12">
      <div
        key={section.title}
        ref={sectionRef}
        style={sectionStyle}
        className={cn(
          " flex flex-col items-start justify-start transition-opacity",
          isActive ? "opacity-100" : "opacity-50"
        )}
      >
        <h3 className="text-4xl font-semibold mb-4 tracking-tight">
          {section.title}
        </h3>
        {section.description && (
          <p className="text-muted-foreground mb-4 line-clamp-3">
            {section.description}
          </p>
        )}
        <Accordion
          className="flex w-full flex-col"
          transition={{ duration: 0.2, ease: "easeInOut" }}
          expandedValue={openItem}
          onValueChange={handleValueChange}
        >
          {section.items.map((feature) => {
            return (
              <AccordionItem
                key={feature.title}
                value={feature.title}
                className="py-2"
              >
                <AccordionTrigger
                  className={cn(
                    "w-full text-left border-b text-xl py-2 cursor-pointer",
                    openItem === feature.title
                      ? "cursor-default"
                      : "cursor-pointer"
                  )}
                >
                  <div className="flex items-center justify-between text-slate-600 group-data-expanded:text-foreground group-hover:text-foreground transition-colors">
                    <div className="flex items-center gap-2.5">
                      <div className="size-2 bg-gray-400 group-hover:bg-primary group-data-expanded:bg-primary transition-colors" />
                      <div>{feature.title}</div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground pb-6 pt-4 text-base">
                    {feature.description}
                  </p>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
}
