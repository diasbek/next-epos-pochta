import Link from "next/link";
import { cn } from "@/lib/cn";
import {
  btnBase,
  btnIconOnly,
  btnIconOnlyLg,
  btnIconOnlyMd,
  btnIconOnlySm,
  btnIconOnlyXs,
  btnShapePill,
  btnShapeRounded,
  btnSizeLg,
  btnSizeMd,
  btnSizeSm,
  btnSizeXs,
  btnToneAccent,
  btnToneDanger,
  btnToneGhost,
  btnToneMain,
  btnToneMuted,
  btnToneOutline,
  btnToneSecondary,
  btnToneSuccess,
  btnToneTelegram,
  btnWidthAuto,
  btnWidthFull,
  btnWidthMobile,
} from "@/styles/ui";

/**
 * Button API (tokens in `tokens.css`):
 * - variant: main|primary|secondary|accent|ghost|outline|muted|danger|success|telegram
 * - size: xs|sm|md|lg (heights = --btn-height-*)
 * - shape: pill (default CTA) | rounded (next to Input)
 * - width: auto|full|mobile
 * - iconOnly: square hit-target matching size height
 */
export type ButtonVariant =
  | "main"
  | "primary"
  | "secondary"
  | "accent"
  | "ghost"
  | "outline"
  | "muted"
  | "danger"
  | "success"
  | "telegram";

export type ButtonSize = "xs" | "sm" | "md" | "lg";
export type ButtonWidth = "auto" | "full" | "mobile";
export type ButtonShape = "pill" | "rounded";

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  width?: ButtonWidth;
  shape?: ButtonShape;
  iconOnly?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
  target?: string;
  rel?: string;
  "aria-label"?: string;
}

const toneClass: Record<ButtonVariant, string> = {
  main: btnToneMain,
  primary: btnToneMain,
  secondary: btnToneSecondary,
  accent: btnToneAccent,
  ghost: btnToneGhost,
  outline: btnToneOutline,
  muted: btnToneMuted,
  danger: btnToneDanger,
  success: btnToneSuccess,
  telegram: btnToneTelegram,
};

const sizeClass: Record<ButtonSize, string> = {
  xs: btnSizeXs,
  sm: btnSizeSm,
  md: btnSizeMd,
  lg: btnSizeLg,
};

const widthClass: Record<ButtonWidth, string> = {
  auto: btnWidthAuto,
  full: btnWidthFull,
  mobile: btnWidthMobile,
};

const shapeClass: Record<ButtonShape, string> = {
  pill: btnShapePill,
  rounded: btnShapeRounded,
};

const iconOnlySizeClass: Record<ButtonSize, string> = {
  xs: btnIconOnlyXs,
  sm: btnIconOnlySm,
  md: btnIconOnlyMd,
  lg: btnIconOnlyLg,
};

function isExternalHref(href: string) {
  return (
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:")
  );
}

export function Button({
  href,
  children,
  variant = "main",
  size = "md",
  width = "auto",
  shape = "pill",
  iconOnly = false,
  className = "",
  type = "button",
  onClick,
  disabled,
  target,
  rel,
  "aria-label": ariaLabel,
}: ButtonProps) {
  const cls = cn(
    btnBase,
    sizeClass[size],
    toneClass[variant],
    widthClass[width],
    shapeClass[shape],
    iconOnly && btnIconOnly,
    iconOnly && iconOnlySizeClass[size],
    className,
  );

  if (href) {
    if (href.startsWith("#") || isExternalHref(href)) {
      return (
        <a
          href={href}
          className={cls}
          onClick={onClick}
          target={target}
          rel={rel}
          aria-label={ariaLabel}
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        href={href}
        className={cls}
        onClick={onClick}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={cls}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
