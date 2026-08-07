# Testing

## Overview

myoFiber uses **Vitest** as the test runner and **React Testing Library** for component testing.

The goal of testing is to verify the public behavior of components, not their implementation details.

---

## Testing Stack

| Tool | Purpose |
|------|---------|
| Vitest | Test Runner |
| React Testing Library | Component Testing |
| @testing-library/jest-dom | Additional DOM Assertions |
| @testing-library/user-event | User Interaction Simulation |
| jsdom | Browser Environment |

---

## Test Philosophy

Tests should verify:

- Component rendering
- Public API
- User interactions
- Accessibility
- Native HTML behavior

Tests should **not** verify:

- Internal implementation
- CSS implementation details
- Private helper functions

---

## Button MVP Tests

The Button component should verify:

- Renders children
- Applies default variant
- Applies default size
- Applies custom variant
- Applies custom size
- Passes native HTML attributes
- Forwards refs
- Merges custom class names

---

## Folder Structure

```
Button/
├── Button.tsx
├── Button.module.css
├── Button.test.tsx
└── ...
```

Each component owns its own test file.

---

## Commands

Install testing dependencies:

```bash
pnpm add -D \
vitest \
@vitest/ui \
jsdom \
@testing-library/react \
@testing-library/jest-dom \
@testing-library/user-event
```

Run tests:

```bash
pnpm test
```

Watch mode:

```bash
pnpm test:watch
```

Coverage:

```bash
pnpm test:coverage
```

---

## Naming Convention

```
Component.tsx
Component.test.tsx
```

Example:

```
Button.tsx
Button.test.tsx
```

---

## Current Status

| Component | Tests |
|-----------|-------|
| Button | ✅ MVP |
| Input | ⬜ Planned |
| Card | ⬜ Planned |
| Modal | ⬜ Planned |