export const ACTION_TYPES = {
  ADD_LIST_USER: "ADD_LIST_USER",
  DELETE_USER: "DELETE_USER"
};

export const addListUser = (id, firstName, lastName, number, age, gender) => ({
  type: ACTION_TYPES.ADD_LIST_USER,
  payload: {
    id: id,
    firstName: firstName,
    lastName: lastName,
    number: number,
    age: age,
    gender: gender
  }
});

export const deleteUser = id => ({
  type: ACTION_TYPES.DELETE_USER,
  payload: id
});
