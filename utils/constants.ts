const objString = {
  STATUS_SUCCESS: "success",
} as const;

export function constantStrings(objKey: keyof typeof objString) {
  return objString[objKey];
}

const obj = {
  FREE_SHIPPING: 35,
} as const;

export function constantNumbers(objKey: keyof typeof obj) {
  return obj[objKey];
}
