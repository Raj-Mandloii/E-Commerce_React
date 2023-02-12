// to load data from local starage;

function getLocalData(key) {
  try {
    let temp = localStorage.getItem(key);
    temp = JSON.parse(temp);
    return temp;
  } catch (e) {
    return undefined;
  }
}

function saveLocalData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function saveProfie(data) {
  localStorage.setItem("profile", JSON.stringify(data));
}



export { getLocalData, saveLocalData, saveProfie };
