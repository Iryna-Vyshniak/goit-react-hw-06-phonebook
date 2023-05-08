import { SET_FILTER } from './filter-types';

const initialState = '';

export const filterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_FILTER:
      return payload;
    default:
      return state;
  }
};
