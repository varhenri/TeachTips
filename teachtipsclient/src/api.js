import axios from 'axios';

export const postNewTip = (payload) => {
    return axios.post("localhost:5001/Tip", payload);
}