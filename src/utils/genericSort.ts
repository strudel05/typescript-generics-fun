import ISorter from "../interfaces/ISorter";

export default function genericSort<T>(
  a: T,
  b: T,
  compareObj: ISorter<T>
): number {
  const { property, isDescending } = compareObj;

  const result = () => {
    if (a[property] > b[property]) {
      return 1;
    }
    if (a[property] < b[property]) {
      return -1;
    }
    return 0;
  };
  return isDescending ? result() * -1 : result();
}
