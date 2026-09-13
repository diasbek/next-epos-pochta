import type { InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes } from "react";
import { cn } from "@/lib/cn";
import {
  controlCheckbox,
  controlFieldInvalid,
  controlFieldMd,
  controlFieldSm,
  controlSelectMd,
  controlSelectSm,
  controlTextarea,
} from "@/styles/ui";

/**
 * Input API — heights share `--btn-height-*` with Button.
 * - size sm: toolbars / home island
 * - size md: default forms
 */
export type ControlSize = "sm" | "md";

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & {
  size?: ControlSize;
  invalid?: boolean;
};

const fieldSizeClass: Record<ControlSize, string> = {
  sm: controlFieldSm,
  md: controlFieldMd,
};

const selectSizeClass: Record<ControlSize, string> = {
  sm: controlSelectSm,
  md: controlSelectMd,
};

export function Input({
  size = "md",
  invalid = false,
  className,
  ...props
}: InputProps) {
  return (
    <input
      className={cn(
        fieldSizeClass[size],
        invalid && controlFieldInvalid,
        className,
      )}
      {...props}
    />
  );
}

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  invalid?: boolean;
};

export function Textarea({
  invalid = false,
  className,
  ...props
}: TextareaProps) {
  return (
    <textarea
      className={cn(controlTextarea, invalid && controlFieldInvalid, className)}
      {...props}
    />
  );
}

type SelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> & {
  size?: ControlSize;
  invalid?: boolean;
};

export function Select({
  size = "md",
  invalid = false,
  className,
  children,
  ...props
}: SelectProps) {
  return (
    <select
      className={cn(
        selectSizeClass[size],
        invalid && controlFieldInvalid,
        className,
      )}
      {...props}
    >
      {children}
    </select>
  );
}

type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size"> & {
  label?: React.ReactNode;
};

export function Checkbox({ label, className, id, ...props }: CheckboxProps) {
  const input = (
    <input
      id={id}
      type="checkbox"
      className={cn(controlCheckbox, className)}
      {...props}
    />
  );
  if (!label) return input;
  return (
    <label className="mb-4 flex items-start gap-2.5 text-[0.92rem] leading-snug text-ink">
      {input}
      <span>{label}</span>
    </label>
  );
}
