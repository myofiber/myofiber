function kebabCase(value: string): string {
  return value.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}

export function resolveReference(value: string): string {
  const match = value.match(/^\{(.+)\}$/);

  if (!match) {
    return value;
  }

  const parts = match[1]
    .split(".")
    .map(kebabCase);

  const namespaceMap: Record<string, string> = {
    colors: "color",
    sizes: "size",
    spacing: "spacing",
    radius: "radius",
    typography: "typography",
  };

  parts[0] = namespaceMap[parts[0]] ?? parts[0];

  return `var(--mf-${parts.join("-")})`;
}