export const WriteToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}

export const ReadFromLocalStorage = (key) => {
    let parsed = JSON.parse(localStorage.getItem(key));
    return parsed ? parsed : null;
}


