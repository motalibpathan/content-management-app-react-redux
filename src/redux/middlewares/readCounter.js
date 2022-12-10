import { ADD_TO_READ } from "../actionTypes/actionTypes";

const readCounter = (store) => (next) => (action) => {
  const state = store.getState();
  const list = state.content.list;
  if (action.type === ADD_TO_READ) {
    const newAction = {
      ...action,
      payload: { ...action.payload, position: list.length },
    };
    return next(newAction);
  }
  return next(action);
};

export default readCounter;
