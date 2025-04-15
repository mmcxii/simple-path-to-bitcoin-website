export function transformCase(
  input: string,
  targetCase: "title",
  overrides: Record<string, string> = {},
): string {
  if (overrides[input] != null) {
    return overrides[input];
  }

  switch (targetCase) {
    case "title": {
      return input
        .split(/(\s+)/)
        .map((token) => {
          if (token === token.toUpperCase()) {
            return token;
          }

          return token
            .replace(/[_-]/g, " ")
            .replace(/([A-Z])/g, " $1")
            .replace(/\//g, "/ ")
            .split(/\s+/)
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(" ")
            .trim();
        })
        .join("");
    }
    default: {
      return input;
    }
  }
}
