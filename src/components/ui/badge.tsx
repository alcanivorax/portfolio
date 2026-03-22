import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default:
          "border border-border bg-muted text-muted-foreground",
        secondary:
          "bg-secondary text-secondary-foreground",
        outline:
          "border border-border text-foreground",
        success:
          "bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 dark:text-emerald-400",
        warning:
          "bg-amber-500/10 text-amber-600 border border-amber-500/20 dark:text-amber-400",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
