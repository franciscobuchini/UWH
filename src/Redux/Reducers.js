// REDUCERS.jsx
import { UPDATE_CONDITION, SET_PHASE, DECREMENT_TIME, SET_TIME_LEFT } from './Actions';

const initialState = {
  Match_Date: "",
  Match_Duration: 15,
  Match_Freezing: 2,
  Match_Halftime: 2,
  Match_Team1: "",
  Match_Team2: "",
  phase: "BeforeMatch",
  timeLeft: 0,
};

const conditionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CONDITION:
      return {
        ...state,
        [action.payload.id]: action.payload.value,
      };
    case SET_PHASE:
      console.log(`Reducers: ${action.payload}`);
      return {
        ...state,
        phase: action.payload,
      };
    case DECREMENT_TIME:
      return {
        ...state,
        timeLeft: state.timeLeft - 100,
      };
    case SET_TIME_LEFT:
      return {
        ...state,
        timeLeft: action.payload,
      };
    default:
      return state;
  }
};

export default conditionsReducer;


