export const setDataToStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}

export const doesKeyExist = (key) => {
    return localStorage.getItem(key) ? true : false;
}

export const parseData = (key) => {
    let parsed = JSON.parse(JSON.parse(localStorage.getItem(key)));
    if (typeof parsed === 'string') parsed = JSON.parse(parsed);
    return parsed;
}


