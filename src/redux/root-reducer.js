import { combineReducers } from 'redux';

import { contactsReducer } from './contacts/contacts-reducer';
import { filterReducer } from './filter/filter-reducer';

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
