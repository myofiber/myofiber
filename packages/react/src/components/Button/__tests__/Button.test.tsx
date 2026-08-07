import { createRef } from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Button } from "../Button";

describe("Button", () => {

  /**
   * Verifies that the component renders its children.
   * This is the most basic functionality of a Button.
   */
  it("renders children", () => {
    render(<Button>Save</Button>);

    expect(
      screen.getByRole("button", { name: "Save" }),
    ).toBeInTheDocument();
  });

  /**
   * Ensures the default variant ("primary")
   * is applied when no variant prop is provided.
   */
  it("uses the default variant", () => {
    render(<Button>Save</Button>);

    const button = screen.getByRole("button");

    expect(button.className).toContain("primary");
  });

  /**
   * Ensures the default size ("md")
   * is applied when no size prop is provided.
   */
  it("uses the default size", () => {
    render(<Button>Save</Button>);

    const button = screen.getByRole("button");

    expect(button.className).toContain("md");
  });

  /**
   * Verifies that a custom variant
   * overrides the default variant.
   */
  it("applies the provided variant", () => {
    render(
      <Button variant="danger">
        Delete
      </Button>,
    );

    const button = screen.getByRole("button");

    expect(button.className).toContain("danger");
  });

  /**
   * Verifies that a custom size
   * overrides the default size.
   */
  it("applies the provided size", () => {
    render(
      <Button size="lg">
        Save
      </Button>,
    );

    const button = screen.getByRole("button");

    expect(button.className).toContain("lg");
  });

  /**
   * Ensures native HTML button
   * attributes are forwarded correctly.
   *
   * This works because ButtonProps extends
   * ButtonHTMLAttributes<HTMLButtonElement>.
   */
  it("passes native HTML attributes", () => {
    render(
      <Button
        disabled
        type="submit"
      >
        Submit
      </Button>,
    );

    const button = screen.getByRole("button");

    expect(button).toBeDisabled();
    expect(button).toHaveAttribute("type", "submit");
  });

  /**
   * Verifies that the forwarded ref
   * points to the underlying HTMLButtonElement.
   *
   * This is why we use forwardRef().
   */
  it("forwards the ref", () => {
    const ref = createRef<HTMLButtonElement>();

    render(
      <Button ref={ref}>
        Save
      </Button>,
    );

    expect(ref.current).toBeInstanceOf(
      HTMLButtonElement,
    );
  });

  /**
   * Ensures custom class names supplied
   * by consumers are merged with the
   * component's internal classes.
   */
  it("merges custom class names", () => {
    render(
      <Button className="custom-class">
        Save
      </Button>,
    );

    const button = screen.getByRole("button");

    expect(button.className).toContain(
      "custom-class",
    );
  });

});