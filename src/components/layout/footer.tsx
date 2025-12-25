import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const socialLinks = [
    { name: "GitHub", url: "#", handle: "@yourusername" },
    { name: "Twitter", url: "#", handle: "@yourusername" },
    { name: "LinkedIn", url: "#", handle: "yourname" },
    { name: "Email", url: "#", handle: "hello@example.com" },
  ];

  const quickLinks = [
    { name: "Projects", url: "#projects" },
    { name: "About", url: "#about" },
    { name: "Blog", url: "#blog" },
    { name: "Contact", url: "#contact" },
  ];

  return (
    <footer className="border-t border-black/10 dark:border-white/10">
      <div className="max-w-[1100px] mx-auto px-8 py-16">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          {/* Identity */}
          <div>
            <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
              Roshan Singh
            </p>
            <p className="mt-1 text-xs text-neutral-500">
              Developer · Systems & Tools
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-xs">
            <a
              href="https://github.com/yourname"
              className="text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
            >
              GitHub
            </a>
            <a
              href="mailto:hello@example.com"
              className="text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
            >
              Email
            </a>
          </div>
        </div>

        <p className="mt-8 text-[11px] text-neutral-400">
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
