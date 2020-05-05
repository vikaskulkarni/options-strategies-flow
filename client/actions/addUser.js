export const ADD_USER = "ADD_USER";
export const ADD_USER_ASYNC = "ADD_USER_ASYNC";

export const addUser = (user) => ({
  type: ADD_USER,
  user,
});

export const addUserAsyncAction = (user) => ({
  type: ADD_USER_ASYNC,
  user,
});
