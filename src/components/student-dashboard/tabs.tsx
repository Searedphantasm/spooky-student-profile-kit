
import { useState } from "react";
import { cn } from "@/lib/utils";

interface TabsProps {
  tabs: string[];
  activeTab: number;
  onChange: (index: number) => void;
}

export function Tabs({ tabs, activeTab, onChange }: TabsProps) {
  return (
    <div className="flex border-b border-halloween-base300">
      {tabs.map((tab, index) => (
        <button
          key={tab}
          className={cn(
            "px-4 py-2 text-sm font-medium transition-colors relative",
            activeTab === index 
              ? "text-halloween-primary" 
              : "text-halloween-baseContent/70 hover:text-halloween-baseContent"
          )}
          onClick={() => onChange(index)}
        >
          {tab}
          {activeTab === index && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-halloween-primary" />
          )}
        </button>
      ))}
    </div>
  );
}
