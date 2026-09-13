import Link from "next/link";
import { cn } from "@/lib/cn";
import { chipActive, chipIdle } from "@/styles/ui";

type ChipProps = {
  href?: string;
  children: React.ReactNode;
  active?: boolean;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

/**
 * Filter / navigation chip — pill outline aligned to Button sm height.
 */
export function Chip({
  href,
  children,
  active = false,
  className,
  onClick,
  type = "button",
}: ChipProps) {
  const cls = cn(active ? chipActive : chipIdle, className);

  if (href) {
    return (
      <Link href={href} className={cls} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={cls} onClick={onClick}>
      {children}
    </button>
  );
}
