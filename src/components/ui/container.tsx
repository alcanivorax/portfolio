import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "default" | "sm" | "lg" | "full";
}

const sizeClasses = {
  default: "max-w-5xl",
  sm: "max-w-3xl",
  lg: "max-w-6xl",
  full: "max-w-full",
};

export function Container({
  className,
  size = "default",
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "w-full mx-auto px-6 md:px-8",
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  children: React.ReactNode;
}

export function Section({ className, id, children, ...props }: SectionProps) {
  return (
    <section id={id} className={className} {...props}>
      {children}
    </section>
  );
}
