/** Checks whether an input is defined and not null. */
export function check<T>(t: T | undefined | null): T {
  if (t === undefined || t === null) {
    throw new Error("Input was null or undefined");
  }
  return t;
}
