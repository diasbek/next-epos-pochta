"use client";

import type { ChangeEvent, ReactNode } from "react";
import { Field } from "formik";
import {
  checkRow,
  controlCheckbox,
  controlFieldMd,
  controlSelectMd,
  controlTextarea,
} from "@/styles/ui";

type CommonProps = {
  name: string;
  id?: string;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  min?: number | string;
  step?: number | string;
  tabIndex?: number;
  autoComplete?: string;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  children?: ReactNode;
  className?: string;
};

export function FormInput({ id, name, className, ...props }: CommonProps) {
  return (
    <Field
      id={id ?? name}
      name={name}
      className={className ?? controlFieldMd}
      {...props}
    />
  );
}

export function FormTextarea({ id, name, className, ...props }: CommonProps) {
  return (
    <Field
      as="textarea"
      id={id ?? name}
      name={name}
      className={className ?? controlTextarea}
      {...props}
    />
  );
}

export function FormSelect({
  id,
  name,
  children,
  className,
  ...props
}: CommonProps) {
  return (
    <Field
      as="select"
      id={id ?? name}
      name={name}
      className={className ?? controlSelectMd}
      {...props}
    >
      {children}
    </Field>
  );
}

export function FormCheckbox({
  label,
  name,
}: {
  label: string;
  name: string;
}) {
  return (
    <label className={checkRow}>
      <Field type="checkbox" name={name} className={controlCheckbox} />
      <span>{label}</span>
    </label>
  );
}
