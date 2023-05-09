import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact } from './contacts-actions';

//import initialContacts from 'data/contacts.json';

export const contactsReducer = createReducer([], builder => {
  builder
    .addCase(addContact, (state, { payload }) => {
      // 1st variant => library protect mutation
      //  state.push(payload); // => return [...state, payload];
      // 2nd variant
      return [...state, payload];
    })
    .addCase(deleteContact, (state, { payload }) => {
      return state.filter(contact => contact.id !== payload);
    });
});
