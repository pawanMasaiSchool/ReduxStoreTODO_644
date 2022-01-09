/**
 *
 * @param {string} key
 */

const loadData = (key) => {
  let loadedData = localStorage.getItem(key);
  loadedData = JSON.parse(loadedData);
  return loadedData;
};

const saveData = (key, data) => {
  const myData = JSON.stringify(data);
  localStorage.setItem(key, myData);
  return true;
};

export { loadData, saveData };
