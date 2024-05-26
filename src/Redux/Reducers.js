// REDUCERS.JS
import { UPDATE_CONDITION } from "./Actions";

const initialState = {
  Match_Date: "",
  Match_Halfs: 2,
  Match_Duration: 15,
  Match_Freezing: 2,
};

const conditionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CONDITION:
      return {
        ...state,
        [action.payload.id]: action.payload.value,
      };
    default:
      return state;
  }
};

export default conditionsReducer;
