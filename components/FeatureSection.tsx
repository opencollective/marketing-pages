"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/motion-primitives/accordion";

import { cn } from "@/lib/utils";
import React from "react";

export type TFeatureSection = {
  title: string;
  description?: string;
  mediaContentClassName?: string;
  items: {
    title: string;
    description: string;
    longDescription?: string;
    media?: React.ReactNode;
  }[];
};

export default function FeatureSection({
  section,
  onItemSelect,
  isActive,
  sectionRef,
}: {
  section: TFeatureSection;
  sectionIndex?: number;
  onItemSelect: (itemIndex: number) => void;
  isActive: boolean;
  sectionRef?: React.Ref<HTMLDivElement>;
}) {
  const [openItem, setOpenItem] = React.useState<React.Key | null>(
    section.items[0].title
  );

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

  return (
    <div
      key={section.title}
      ref={sectionRef}
      className={cn(
        "min-h-[70dvh] flex flex-col items-start justify-start transition-opacity",
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
                <div className="flex items-center justify-between text-muted-foreground group-data-expanded:text-foreground group-hover:text-foreground transition-colors">
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
  );
}
