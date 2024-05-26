// ACTION.JS
export let UPDATE_CONDITION = "UPDATE_CONDITION";

export let updateCondition = (id, value) => ({
  type: UPDATE_CONDITION,
  payload: { id, value },
});