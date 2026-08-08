import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "../../../src/components/Button";

const meta = {
  title: "Components/Button",
  component: Button,

  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
    variant: {
      control: "select",
      options: [
        "primary",
        "success",
        "warning",
        "danger",
        "outline",
        "ghost",
        "link",
      ],
    },

    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
  },

  args: {
    children: "Button",
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * Default Button.
 *
 * Uses the default variant and size:
 * variant = primary
 * size = md
 */
export const Default: Story = {};

/**
 * Primary Button.
 */
export const Primary: Story = {
  args: {
    variant: "primary",
    size: "md",
    children: "Primary",
  },
};

/**
 * Success Button.
 */
export const Success: Story = {
  args: {
    variant: "success",
    size: "md",
    children: "Success",
  },
};

/**
 * Warning Button.
 */
export const Warning: Story = {
  args: {
    variant: "warning",
    size: "md",
    children: "Warning",
  },
};

/**
 * Danger Button.
 */
export const Danger: Story = {
  args: {
    variant: "danger",
    size: "md",
    children: "Delete",
  },
};

/**
 * Outline Button.
 */
export const Outline: Story = {
  args: {
    variant: "outline",
    size: "md",
    children: "Outline",
  },
};

/**
 * Ghost Button.
 */
export const Ghost: Story = {
  args: {
    variant: "ghost",
    size: "md",
    children: "Ghost",
  },
};

/**
 * Link Button.
 */
export const Link: Story = {
  args: {
    variant: "link",
    size: "md",
    children: "Link",
  },
};

/**
 * Shows all available Button sizes.
 */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
      <Button size="xs">XS</Button>
      <Button size="sm">SM</Button>
      <Button size="md">MD</Button>
      <Button size="lg">LG</Button>
      <Button size="xl">XL</Button>
    </div>
  ),
};

/**
 * Shows all available Button variants.
 */
export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
      <Button variant="primary">Primary</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
};

/**
 * Disabled Button.
 */
export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled",
  },
};