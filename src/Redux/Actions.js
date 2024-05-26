// ACTION.JS
export const UPDATE_CONDITION = "UPDATE_CONDITION";

export const updateCondition = (id, value) => ({
  type: UPDATE_CONDITION,
  payload: { id, value },
});