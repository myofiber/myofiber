import type { ButtonHTMLAttributes, ReactNode } from "react";

import type { ButtonVariant } from "./ButtonVariant";
import type { ButtonSize } from "./ButtonSize";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  //Every button should have children
  children: ReactNode;

  variant?: ButtonVariant;

  size?: ButtonSize;
}
