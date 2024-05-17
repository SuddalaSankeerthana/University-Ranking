const getRank = (getTopUniversities,columnName) => {
  let rank = 1;
  getTopUniversities.forEach((element) => {
    element[columnName] = rank;
    rank = rank + 1;
    return element;
  });
  return getTopUniversities;
};
module.exports = getRank;
