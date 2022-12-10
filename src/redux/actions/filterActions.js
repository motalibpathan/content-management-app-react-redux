import { TAG_FILTER, TOGGLE_SORT } from "../actionTypes/actionTypes";

export const toggleSort = (data) => {
  return {
    type: TOGGLE_SORT,
    payload: data,
  };
};
export const tagFilter = (data) => {
  return {
    type: TAG_FILTER,
    payload: data,
  };
};
