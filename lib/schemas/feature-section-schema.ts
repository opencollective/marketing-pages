import { z } from "zod";
import colors from "tailwindcss/colors";

// Media object schema
export const mediaSchema = z.object({
  src: z.string(),
  srcWidth: z.number(),
  srcHeight: z.number(),
  alt: z.string().optional(),
  style: z.record(z.string(), z.any()).optional(),
  containerStyle: z.record(z.string(), z.any()).optional(),
  //   style: z
  //   .custom<CSSProperties>((val) => {
  //     return val === undefined || (typeof val === "object" && val !== null);
  //   })
  //   .optional(),
});

// Feature item schema
export const featureItemSchema = z.object({
  title: z.string().min(1, "Feature title is required"),
  description: z.string().min(1, "Feature description is required"),
  media: mediaSchema.optional(),
});

// Generate all color variants (e.g., 'blue-500', 'red-700', etc.)
const generateColorVariants = () => {
  // Get available color keys from tailwindcss/colors
  // Filter out some internal properties that aren't actually colors
  const availableColorKeys = Object.keys(colors).filter(
    (key) =>
      typeof colors[key as keyof typeof colors] === "object" &&
      !["lightBlue", "warmGray", "trueGray", "coolGray", "blueGray"].includes(
        key
      )
  );

  // Start with a base color with shade to satisfy TypeScript's need for a non-empty tuple
  const variants: [string, ...string[]] = ["slate-50"];

  // Add all colors with their shades
  availableColorKeys.forEach((color) => {
    [
      "50",
      "100",
      "200",
      "300",
      "400",
      "500",
      "600",
      "700",
      "800",
      "900",
      "950",
    ].forEach((shade) => {
      // Skip adding slate-50 again since it's already in the tuple
      if (!(color === "slate" && shade === "50")) {
        variants.push(`${color}-${shade}`);
      }
    });
  });

  return variants;
};

// Create a zod enum with all possible Tailwind color values
export const tailwindColorEnum = z.enum(generateColorVariants());

// Feature section schema
export const featureSectionSchema = z.object({
  title: z.string().min(1, "Section title is required"),
  description: z.string().min(1, "Section description is required"),
  tailwindColor: tailwindColorEnum.optional().superRefine((val, ctx) => {
    if (val !== undefined && !tailwindColorEnum.safeParse(val).success) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Color must be a valid Tailwind color, e.g., "blue-500"',
      });
    }
  }),
  fgColor: tailwindColorEnum.optional().superRefine((val, ctx) => {
    if (val !== undefined && !tailwindColorEnum.safeParse(val).success) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Color must be a valid Tailwind color, e.g., "blue-500"',
      });
    }
  }),
  bgColor: tailwindColorEnum.optional().superRefine((val, ctx) => {
    if (val !== undefined && !tailwindColorEnum.safeParse(val).success) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Color must be a valid Tailwind color, e.g., "blue-500"',
      });
    }
  }),
  items: z
    .array(featureItemSchema)
    .min(1, "At least one feature item is required"),
});

// Array of feature sections
export const featureSectionsSchema = z.array(featureSectionSchema);

// Types derived from the schemas
export type Media = z.infer<typeof mediaSchema>;
export type FeatureItem = z.infer<typeof featureItemSchema>;
export type FeatureSection = z.infer<typeof featureSectionSchema>;
export type FeatureSections = z.infer<typeof featureSectionsSchema>;
export type TailwindColor = z.infer<typeof tailwindColorEnum>;
