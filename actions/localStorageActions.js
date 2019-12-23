import { AsyncStorage } from 'react-native';
import { QUOTE_ADDED_TO_FAVQUOTES, FAV_QUOTES_LOADED } from '../constants/Action-types';

export function loadFavQuotes(payload) {
    return async function(dispatch) {
        try {
            let value = await AsyncStorage.getItem('yeSavedQuotes');
            dispatch ({ type: FAV_QUOTES_LOADED, payload: JSON.parse(value) });
        } catch (error) {
            console.log(error);
            alert('Can‘t get fav quotes');
        }
    }
};

export function addQuoteToFavs(payload) {
    return async function(dispatch) {
        console.log(payload);
        try {
            let storedArray = await AsyncStorage.getItem('yeSavedQuotes');
            storedArray = JSON.parse(storedArray);

            if ( !Array.isArray(storedArray) ){
                storedArray = [ { title: payload, id: payload } ];
                await AsyncStorage.setItem('yeSavedQuotes', JSON.stringify(storedArray));
            }


            else {
                storedArray.push({ title: payload, id: payload });
                console.log(storedArray);
                AsyncStorage.setItem('yeSavedQuotes', JSON.stringify(storedArray));
            }
            dispatch ({ type: QUOTE_ADDED_TO_FAVQUOTES, payload: storedArray })
        
        } catch (error) {
            console.log(error);
        }
    }
};