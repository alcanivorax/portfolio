import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-black/10 dark:border-white/10">
      <div className="max-w-275 mx-auto px-8 py-16">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          {/* Identity */}
          <div>
            <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
              Roshan Singh
            </p>
            <p className="mt-1 text-xs text-neutral-500">
              Developer · Web & Tools
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-xs">
            <Link
              href="https://github.com/alcanivorax"
              className="text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
            <Link
              href="mailto:roshansingh6.022@gmail.com"
              className="text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email
            </Link>
          </div>
        </div>

        <p className="mt-8 text-[11px] text-neutral-400">
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
