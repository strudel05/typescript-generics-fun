export default function genericSearch<T>(
  object: T,
  properties: Array<keyof T>,
  searchQuery: string,
  shouldBeCaseSensitive: boolean = false
): boolean {
  if (searchQuery === "") {
    return true;
  }

  return properties.some((property) => {
    const value = object[property];
    if (typeof value === "string" || typeof value === "number") {
      if (shouldBeCaseSensitive) {
        return value.toString().includes(searchQuery);
      }
      return value.toString().toLowerCase().includes(searchQuery);
    }
    return false;
  });
}
