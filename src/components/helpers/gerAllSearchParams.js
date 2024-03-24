export const gerAllSearchParams = (params, obj) => {
  for (const [key, value] of params.entries()) {
    obj[key] = value;
  }
};
