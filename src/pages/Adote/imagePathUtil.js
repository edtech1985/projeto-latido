// imagePathUtil.js
export const getImagePath = (relativePath) => {
  return require(`../../${relativePath}`);
};
