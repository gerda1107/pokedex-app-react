import Axios from 'axios';

export const fetchData = url => {
    return Axios.get(`${url}`);
}