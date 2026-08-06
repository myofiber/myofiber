import type {
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

import type { ButtonVariant } from "./ButtonVariant";
import type { ButtonSize } from "./ButtonSize";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {

  children?: ReactNode;

  variant?: ButtonVariant;

  size?: ButtonSize;
}