"use client";

import * as React from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useRouter } from "next/navigation";
import { DialogTitle } from "@radix-ui/react-dialog";
import { TextAlignStart } from "lucide-react";
import { Kbd } from "./ui/kbd";
import { CornerDownLeft } from "lucide-react";
import Link from "next/link";

type SearchItem = {
  slug: string;
  title: string;
  description?: string;
};

export function SearchCommand({ project }: { project: SearchItem[] }) {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  // ⌘K / Ctrl+K
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <DialogTitle className="sr-only">Search</DialogTitle>
      <CommandInput placeholder="Search posts…" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Projects">
          {project.map((project) => (
            <CommandItem
              key={project.slug}
              value={project.title}
              onSelect={() => {
                const el = document.getElementById(project.slug);

                setOpen(false);

                if (!el) return;

                // Scroll first
                el.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });

                // Temporary highlight
                el.classList.add("ring-1", "ring-neutral-300");

                setTimeout(() => {
                  el.classList.remove("ring-1", "ring-neutral-300");
                }, 800);
              }}
            >
              <TextAlignStart /> {project.title}
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandGroup heading="Pages">
          <Link href="https://personal-blog-livid-five.vercel.app/">
            <CommandItem
              value="About"
              onSelect={() => {
                setOpen(false);
              }}
            >
              Blog
            </CommandItem>
          </Link>
        </CommandGroup>
      </CommandList>
      <div className="flex items-center justify-end gap-6 px-4 py-2 border-t border-border text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <span>Go to page</span>
          <Kbd>
            <CornerDownLeft />
          </Kbd>
        </div>

        <div className="flex items-center gap-2">
          <span>Exit</span>
          <Kbd>Esc</Kbd>
        </div>
      </div>
    </CommandDialog>
  );
}
