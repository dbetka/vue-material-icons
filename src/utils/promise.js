export const promise = {
  timeout (timeout) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(), timeout);
    });
  },
};
