import { combineReducers } from 'redux';

import { NEW_QUOTE_LOADED, QUOTE_ADDED_TO_FAVQUOTES, FAV_QUOTES_LOADED } from '../constants/Action-types';
import { WELCOME_SENTENCE } from '../constants/Constants';

const lastQuoteReducer = (state = WELCOME_SENTENCE, action) => {
    switch (action.type) {
      case NEW_QUOTE_LOADED:
        return action.payload;
      default:
        return state;
    }
};

const favouriteQuotesReducer = (state = [], action) => {
  switch (action.type) {
    case QUOTE_ADDED_TO_FAVQUOTES:
      return action.payload;
    case FAV_QUOTES_LOADED:
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
    lastQuote: lastQuoteReducer,
    favouriteQuotes: favouriteQuotesReducer
});

export default rootReducer;