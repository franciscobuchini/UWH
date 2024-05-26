import { UPDATE_CONDITION } from "./Actions";

const initialState = {
  Match_Date: "",
  Match_Duration: 15,
  Match_Freezing: 2,
  Match_Halftime: 2,
  Match_Team1: "",
  Match_Team2: "",
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
