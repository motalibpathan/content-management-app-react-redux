import {
  ADD_CONTENT,
  ADD_TO_READ,
  DELETE_CONTENT,
  GET_CONTENT,
  UPDATE_CONTENT,
} from "../actionTypes/actionTypes";

export const getContents = (data) => {
  console.log("get content called with data: ", data);
  return {
    type: GET_CONTENT,
    payload: data,
  };
};

export const addToRead = (data) => {
  console.log("get content called with data: ", data);
  return {
    type: ADD_TO_READ,
    payload: data,
  };
};

export const addContent = (content) => {
  console.log("addContent");
  return {
    type: ADD_CONTENT,
    payload: content,
  };
};

export const deleteContent = (id) => {
  return {
    type: DELETE_CONTENT,
    payload: id,
  };
};

export const updateContent = (data) => {
  console.log("get content called with data: ", data);
  return {
    type: UPDATE_CONTENT,
    payload: data,
  };
};
