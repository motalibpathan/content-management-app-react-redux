import {
  ADD_CONTENT,
  ADD_TO_READ,
  DELETE_CONTENT,
  GET_CONTENT,
  UPDATE_CONTENT,
} from "../actionTypes/actionTypes";

const initialState = {
  list: [],
  contents: [],
};

const contentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTENT:
      return {
        ...state,
        contents: action.payload,
      };
    case DELETE_CONTENT:
      const remaining = state.contents.filter(
        (content) => content._id !== action.payload
      );
      return {
        ...state,
        contents: [...remaining],
      };

    case ADD_CONTENT:
      return {
        ...state,
        contents: [...state.contents, action.payload],
      };
    case UPDATE_CONTENT:
      const rest = state.contents.filter(
        (content) => content._id !== action.payload._id
      );

      return {
        ...state,
        contents: [...rest, action.payload],
      };

    case ADD_TO_READ:
      const filtered = state.list.filter(
        (content) => content._id !== action.payload._id
      );
      return {
        ...state,
        list: [action.payload, ...filtered],
      };

    default:
      return state;
  }
};

export default contentReducer;
