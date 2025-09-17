"use client";

import MDEditor, { commands, divider } from "@uiw/react-md-editor";
import { useReadme } from "@/context/Readme.provider";
import { downloadFile } from "@/lib/downloadFile";
import { useEffect, useState } from "react";
import { Download } from "lucide-react";

export default function Editor() {
  const { content, setContent } = useReadme();
  const [editorHeight, setEditorHeight] = useState(600);

  useEffect(() => {
    const updateHeight = () => setEditorHeight(window.innerHeight - 64);
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const downloadCommand = {
    name: "download",
    keyCommand: "download",
    buttonProps: {
      "aria-label": "Download README",
      title: "Download file",
    },
    icon: <Download width={14} height={14} />,
    execute: () => downloadFile(content, "README.md"),
  };

  return (
    <div className="md-editor-custom h-full w-full p-4 transition-colors duration-300">
      <MDEditor
        color="#fff"
        value={content}
        onChange={(value) => setContent(value ?? "")}
        height={editorHeight}
        preview="live"
        commands={[...commands.getCommands(), divider, downloadCommand]}
        visibleDragbar={false}
        className="transition-colors duration-300"
        previewOptions={{
          style: {
            backgroundColor: "var(--color-section-bg)",
            color: "var(--color-foreground)",
          },
        }}
      />
    </div>
  );
}
