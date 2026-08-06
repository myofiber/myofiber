import { forwardRef } from "react";

import type { ButtonProps } from "./types/Button.types";

import styles from "./Button.module.css";

import {
  DEFAULT_BUTTON_SIZE,
  DEFAULT_BUTTON_VARIANT,
} from "./Button.constants";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = DEFAULT_BUTTON_VARIANT,
      size = DEFAULT_BUTTON_SIZE,
      className,
      type = "button",
      ...rest
    },
    ref,
  ) => {
    const classes = [styles.button, styles[variant], styles[size], className]
      .filter(Boolean)
      .join(" ");

    return (
      <button ref={ref} type={type} className={classes} {...rest}>
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
