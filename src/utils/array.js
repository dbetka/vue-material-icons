export const arrayUtils = {
  removeItem (array, toRemove) {
    const indexToRemove = array.indexOf(toRemove);
    return array.splice(indexToRemove, 1);
  },
  removeItemByIndex (array, indexToRemove) {
    return array.splice(indexToRemove, 1);
  },
};
