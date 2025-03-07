"use client";

import {
  Disclosure,
  DisclosureContent,
  DisclosureTrigger,
} from "@/components/motion-primitives/disclosure";
import { cn } from "@/lib/utils";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
export type TFeatureSection = {
  title: string;
  description?: string;
  items: {
    title: string;
    description: string;
    longDescription?: string;
  }[];
};

interface CollapsibleCardProps {
  title: string;
  description: string;
}

const CollapsibleCard: React.FC<CollapsibleCardProps> = ({
  title,
  description,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [heights, setHeights] = useState({ full: 0, clamped: 0 });

  const fullRef = useRef<HTMLParagraphElement>(null);
  const clampedRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const fullHeight = fullRef.current?.scrollHeight || 0;
    const clampedHeight = clampedRef.current?.scrollHeight || 0;
    setHeights({ full: fullHeight, clamped: clampedHeight });
  }, [description]);

  const fullHeight = fullRef.current?.clientHeight || 0;
  const clampedHeight = clampedRef.current?.clientHeight || 0;
  console.log({ fullDiv: fullRef.current, clampedDiv: clampedRef.current });

  return (
    <div className="border rounded p-4 max-w-md relative">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <motion.div
        animate={{ height: expanded ? fullHeight : clampedHeight }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden relative"
      >
        <p
          className={`text-gray-700 transition-all duration-300 ${
            !expanded ? "line-clamp-2" : ""
          }`}
        >
          {description}
        </p>
      </motion.div>
      <button
        onClick={() => setExpanded((prev) => !prev)}
        className="mt-2 text-blue-500 hover:underline focus:outline-none"
      >
        {expanded ? "Collapse" : "Expand"}
      </button>
      <p
        ref={fullRef}
        className="absolute w-full invisible bg-blue-500 text-white -right-24"
      >
        {description}
      </p>
      <p
        ref={clampedRef}
        className="absolute border invisible border-red w-full bg-red-500 text-white -left-2 line-clamp-2"
      >
        {description}
      </p>
      {/* Hidden elements for height measurement */}
    </div>
  );
};

export default function FeatureSection({
  section,
}: {
  section: TFeatureSection;
}) {
  const [openItem, setOpenItem] = React.useState<string | null>(null);
  return (
    <div
      key={section.title}
      className="min-h-[80vh] flex justify-center flex-col"
    >
      <h3 className="text-4xl font-semibold mb-4 tracking-tight">
        {section.title}
      </h3>
      {section.description && (
        <p className="text-muted-foreground mb-4 line-clamp-3">
          {section.description}
        </p>
      )}
      <div className="space-y-8 mt-8 -mx-4">
        {section.items.map((feature) => {
          const open = openItem === feature.title;
          return (
            <div key={feature.title}>
              {/* <CollapsibleCard
                title={feature.title}
                description={feature.description}
              /> */}
              <Disclosure
                open={open}
                onOpenChange={(open) =>
                  setOpenItem(open ? feature.title : null)
                }
                className={cn(
                  open ? "" : "",
                  "rounded-lg px-4 bg-gray-50 transition-colors hover:bg-gray-100"
                )}
              >
                <DisclosureTrigger>
                  <div className="w-full py-3 space-y-2 cursor-pointer">
                    <h3
                      className="w-full text-left text-lg font-medium"
                      // type="button"
                    >
                      {feature.title}
                    </h3>

                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </DisclosureTrigger>
                <DisclosureContent>
                  <div className="overflow-hidden pb-4">
                    <div className="pt-0 text-muted-foreground">
                      <p className="break-keep">{feature.longDescription}</p>
                    </div>
                  </div>
                </DisclosureContent>
              </Disclosure>
            </div>
          );
        })}
      </div>
    </div>
  );
}
