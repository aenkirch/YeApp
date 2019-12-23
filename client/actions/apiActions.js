import { NEW_QUOTE_LOADED } from '../constants/Action-types';

import axios from 'axios';

export function loadNewQuote(payload) {
    return function(dispatch) {
        return axios.get('https://api.kanye.rest/?format=text')
        .then((res) => {
            dispatch({ type: NEW_QUOTE_LOADED, payload: res.data })
        })
        .catch((err) => {
            console.log(err);
        })
    }
};