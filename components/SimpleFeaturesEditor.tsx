"use client";

import { useState, useEffect, useRef } from "react";
import {
  featureSectionsSchema,
  FeatureSections,
} from "@/lib/schemas/feature-section-schema";
import { featureSections as defaultFeatureSections } from "@/data/feature-sections";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import { toast } from "sonner";
import dynamic from "next/dynamic";
import { ZodError, ZodIssue } from "zod";
import { Pen } from "lucide-react";
import { zodToJsonSchema } from "zod-to-json-schema";
import type { editor } from "monaco-editor";
import type { Monaco } from "@monaco-editor/react";

// Dynamically import Monaco Editor with no SSR to avoid hydration issues
const MonacoEditor = dynamic(
  () => import("@monaco-editor/react").then((mod) => mod.default),
  { ssr: false }
);

const LOCAL_STORAGE_KEY = "features-editor-data";

// Convert Zod schema to JSON schema for Monaco
const jsonSchema = zodToJsonSchema(featureSectionsSchema, {
  $refStrategy: "none",
  errorMessages: true,
});

export default function SimpleFeaturesEditor({
  onSave,
}: {
  onSave: (data: FeatureSections) => void;
}) {
  const [open, setOpen] = useState(false);
  const [jsonValue, setJsonValue] = useState("");
  const [isEditorReady, setIsEditorReady] = useState(false);
  const [isJsonValid, setIsJsonValid] = useState(true);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load data from localStorage on component mount
  useEffect(() => {
    try {
      const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);

      if (savedData) {
        // Format the JSON with 2 spaces for readability
        setJsonValue(JSON.stringify(JSON.parse(savedData), null, 2));
      } else {
        // Use default data if nothing in localStorage
        setJsonValue(JSON.stringify(defaultFeatureSections, null, 2));
      }
    } catch {
      console.error("Error loading data");
      setJsonValue(JSON.stringify(defaultFeatureSections, null, 2));
    }
  }, []);

  // Validate JSON whenever it changes
  useEffect(() => {
    if (jsonValue) {
      try {
        const parsedData = JSON.parse(jsonValue);
        const result = featureSectionsSchema.safeParse(parsedData);
        setIsJsonValid(result.success);
      } catch {
        setIsJsonValid(false);
      }
    }
  }, [jsonValue]);

  // Handle editor mounting
  const handleEditorDidMount = (
    editor: editor.IStandaloneCodeEditor,
    monaco: Monaco
  ) => {
    setIsEditorReady(true);

    // Set up JSON validation based on our schema
    monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
      validate: true,
      schemas: [
        {
          uri: "http://opencollective/schemas/feature-sections.json", // A unique URI for this schema
          fileMatch: ["*"], // Apply to all JSON files
          schema: jsonSchema,
        },
      ],
      enableSchemaRequest: false,
    });

    // No need for the interval-based validation since we want errors to show only on save
  };

  // Handle text changes in the editor
  const handleEditorChange = (value: string | undefined) => {
    if (value !== undefined) {
      setJsonValue(value);
    }
  };

  // Handle saving the edited JSON
  const handleSave = () => {
    try {
      // Parse the JSON to validate it's valid JSON
      const parsedData = JSON.parse(jsonValue);

      // Validate against the schema
      const result = featureSectionsSchema.safeParse(parsedData);

      if (result.success) {
        // Save to localStorage
        localStorage.setItem(LOCAL_STORAGE_KEY, jsonValue);

        // Call the onSave callback
        onSave(result.data);

        // Show success toast
        toast.success("Saved successfully!");
      } else {
        // Format and display the actual validation errors
        const errorMessages = formatZodErrors(result.error);

        // Show error toast with title and description
        toast.error("Validation Error", {
          description: errorMessages,
        });
      }
    } catch {
      // Show JSON syntax error toast
      toast.error("JSON Syntax Error", {
        description:
          "The JSON structure is invalid. Please fix the syntax errors.",
      });
    }
  };

  // Handle importing JSON from a file
  const handleImportClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // Process the imported file
  const handleFileImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const content = e.target?.result as string;
        const parsedData = JSON.parse(content);

        // Validate against schema
        const result = featureSectionsSchema.safeParse(parsedData);

        if (result.success) {
          // Format the JSON with 2 spaces for readability
          setJsonValue(JSON.stringify(parsedData, null, 2));
          toast.success("File imported successfully!");
        } else {
          const errorMessages = formatZodErrors(result.error);
          toast.error("Invalid JSON Structure", {
            description: errorMessages,
          });
        }
      } catch {
        toast.error("Parse Error", {
          description: "Could not parse the imported file as JSON",
        });
      }

      // Reset the file input
      if (event.target) {
        event.target.value = "";
      }
    };

    reader.onerror = () => {
      toast.error("File Error", {
        description: "Failed to read the file",
      });
    };

    reader.readAsText(file);
  };

  // Handle exporting JSON to a file
  const handleExport = () => {
    try {
      // We can rely on the isJsonValid state instead of revalidating
      if (!isJsonValid) {
        toast.error("Export Error", {
          description:
            "Cannot export invalid JSON. Please fix validation errors first.",
        });
        return;
      }

      // Create a blob with the JSON data
      const blob = new Blob([jsonValue], { type: "application/json" });
      const url = URL.createObjectURL(blob);

      // Create a download link and trigger it
      const a = document.createElement("a");
      a.href = url;
      a.download = "features-data.json";
      document.body.appendChild(a);
      a.click();

      // Clean up
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      toast.success("File exported successfully!");
    } catch {
      toast.error("Export Error", {
        description: "Failed to export JSON",
      });
    }
  };

  // Handle resetting to default values
  const handleResetToDefault = () => {
    const isConfirmed = window.confirm(
      "Warning: This will reset the local storage content to the default values."
    );

    if (isConfirmed) {
      // Set the editor value to defaults
      const defaultValue = JSON.stringify(defaultFeatureSections, null, 2);
      setJsonValue(defaultValue);

      // Remove from localStorage
      localStorage.removeItem(LOCAL_STORAGE_KEY);

      // Call the onSave callback with default data
      onSave(defaultFeatureSections);

      toast.success("Reset to defaults successfully!");
    }
  };

  // Function to format Zod validation errors
  const formatZodErrors = (error: ZodError) => {
    if (!error || !error.errors || error.errors.length === 0) {
      return "Invalid data structure";
    }

    // Extract and format error messages
    return error.errors
      .map((err: ZodIssue) => {
        const path = err.path.join(".");
        return `${path ? `${path}: ` : ""}${err.message}`;
      })
      .join("; ");
  };

  return (
    <>
      <Sheet open={open} onOpenChange={setOpen} modal={false}>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <Pen />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="w-[400px] sm:w-[540px] md:w-[720px] border-l shadow-lg"
        >
          <SheetHeader>
            <SheetTitle>Edit Features</SheetTitle>
          </SheetHeader>

          <div className="flex flex-col h-screen gap-4">
            <div className="flex-1 min-h-0 border rounded-md overflow-hidden">
              <MonacoEditor
                height="100%"
                language="json"
                value={jsonValue}
                onChange={handleEditorChange}
                onMount={handleEditorDidMount}
                options={{
                  automaticLayout: true,
                  formatOnPaste: true,
                  formatOnType: true,
                  minimap: { enabled: false },
                  folding: true,
                  foldingStrategy: "indentation",
                  scrollBeyondLastLine: false,
                  lineNumbers: "on",
                  renderLineHighlight: "all",
                  tabSize: 2,
                  wordWrap: "on",
                  scrollbar: {
                    verticalScrollbarSize: 8,
                    horizontalScrollbarSize: 8,
                  },
                }}
                loading={<div className="p-4">Loading editor...</div>}
                className="min-h-full"
              />
            </div>

            {/* Hidden file input for importing JSON */}
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileImport}
              accept=".json"
              className="hidden"
            />

            <SheetFooter className="flex-shrink-0 flex flex-col items-start gap-4">
              <div className="flex items-center gap-2">
                <Button
                  onClick={handleSave}
                  disabled={!isEditorReady || !isJsonValid}
                  title={
                    !isJsonValid
                      ? "Fix validation errors before saving"
                      : "Save changes"
                  }
                >
                  Save
                </Button>
                <Button
                  onClick={handleImportClick}
                  variant="outline"
                  disabled={!isEditorReady}
                >
                  Import JSON
                </Button>
                <Button
                  onClick={handleExport}
                  variant="outline"
                  disabled={!isEditorReady || !isJsonValid}
                  title={
                    !isJsonValid
                      ? "Cannot export invalid JSON"
                      : "Export to file"
                  }
                >
                  Export JSON
                </Button>
                <Button
                  onClick={handleResetToDefault}
                  variant="outline"
                  disabled={!isEditorReady}
                >
                  Reset to Default
                </Button>
              </div>
            </SheetFooter>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
