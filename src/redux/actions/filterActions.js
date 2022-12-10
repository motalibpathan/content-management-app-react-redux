import { TAG_FILTER, TOGGLE_SORT } from "../actionTypes/actionTypes";

export const toggleSort = (data) => {
  console.log("get content called with data: ", data);
  return {
    type: TOGGLE_SORT,
    payload: data,
  };
};
export const tagFilter = (data) => {
  console.log("get content called with data: ", data);
  return {
    type: TAG_FILTER,
    payload: data,
  };
};
