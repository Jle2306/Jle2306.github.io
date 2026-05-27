import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

type SharedProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
};

type ButtonAsButton = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type ButtonAsLink = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-slate-950 text-white shadow-sm shadow-slate-950/10 hover:bg-slate-800 focus-visible:outline-slate-950",
  secondary:
    "border border-slate-200 bg-white text-slate-950 hover:border-cyan-200 hover:bg-cyan-50/70 focus-visible:outline-cyan-600",
  ghost:
    "text-slate-600 hover:bg-slate-100 hover:text-slate-950 focus-visible:outline-slate-500",
};

const baseClasses =
  "inline-flex min-h-11 items-center justify-center whitespace-nowrap rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50";

export function Button({
  ...props
}: ButtonProps) {
  const { children, className, variant = "primary" } = props;
  const classes = cn(baseClasses, variantClasses[variant], className);

  if ("href" in props && props.href) {
    const { href, children: _children, className: _className, variant: _variant, ...linkProps } = props;
    void _children;
    void _className;
    void _variant;

    return (
      <Link className={classes} href={href} {...linkProps}>
        {children}
      </Link>
    );
  }

  const {
    children: _children,
    className: _className,
    variant: _variant,
    type = "button",
    ...buttonProps
  } = props as ButtonAsButton;
  void _children;
  void _className;
  void _variant;

  return (
    <button className={classes} type={type} {...buttonProps}>
      {children}
    </button>
  );
}
