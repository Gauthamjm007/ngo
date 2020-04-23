import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import ngoReducer from "../reducers/ngoReducer";

const configStore = () => {
  const store = createStore(
    combineReducers({
      ngo: ngoReducer,
    }),
    applyMiddleware(thunk)
  );
  return store;
};

export default configStore;
