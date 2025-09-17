"use client";

import Editor from "@/components/Editor";
import { useReadme } from "@/context/Readme.provider";

export default function EditorPage() {
  const { content, setContent } = useReadme();

  return (
    <main className="h-screen transition-colors duration-300 bg-background-light dark:bg-background-dark text-foreground-light dark:text-foreground-dark">
      <Editor value={content} onChange={setContent} />
    </main>
  );
}
