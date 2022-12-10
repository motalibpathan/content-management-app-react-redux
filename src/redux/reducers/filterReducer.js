import { TAG_FILTER, TOGGLE_SORT } from "../actionTypes/actionTypes";

const initialState = {
  filters: {
    sortBy: "",
    tag: "",
  },
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SORT:
      if (action.payload === state.filters.sortBy) {
        return {
          ...state,
          filters: {
            ...state.filters,
            sortBy: "",
          },
        };
      } else {
        return {
          ...state,
          filters: {
            ...state.filters,
            sortBy: action.payload,
          },
        };
      }
    case TAG_FILTER:
      if (action.payload === state.filters.tag) {
        return {
          ...state,
          filters: {
            ...state.filters,
            tag: "",
          },
        };
      } else {
        return {
          ...state,
          filters: {
            ...state.filters,
            tag: action.payload,
          },
        };
      }

    default:
      return state;
  }
};

export default filterReducer;
