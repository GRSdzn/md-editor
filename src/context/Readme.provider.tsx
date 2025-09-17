"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface ReadmeContextType {
  content: string;
  setContent: (value: string) => void;
}

const ReadmeContext = createContext<ReadmeContextType | undefined>(undefined);

export function ReadmeProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<string>(
    "## Добро пожаловать в генератор README\n"
  );

  useEffect(() => {
    const saved = localStorage.getItem("readme-content");
    if (saved) setContent(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("readme-content", content);
  }, [content]);

  return (
    <ReadmeContext.Provider value={{ content, setContent }}>
      {children}
    </ReadmeContext.Provider>
  );
}

export function useReadme() {
  const context = useContext(ReadmeContext);
  if (!context)
    throw new Error("useReadme must be used within a ReadmeProvider");
  return context;
}
