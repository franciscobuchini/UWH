// ACTION.JS
export const UPDATE_CONDITION = "UPDATE_CONDITION";
export const SET_PHASE = "SET_PHASE";
export const DECREMENT_TIME = "DECREMENT_TIME";
export const SET_TIME_LEFT = "SET_TIME_LEFT";

export const updateCondition = (id, value) => ({
  type: UPDATE_CONDITION,
  payload: { id, value },
});

export const setPhase = (phase) => ({
  type: SET_PHASE,
  payload: phase,
});

export const decrementTime = () => ({
  type: DECREMENT_TIME,
});

export const setTimeLeft = (timeLeft) => ({
  type: SET_TIME_LEFT,
  payload: timeLeft,
});