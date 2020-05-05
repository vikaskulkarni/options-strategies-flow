import { ADD_USER_ASYNC } from "../actions/addUser";

const userDataReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case ADD_USER_ASYNC:
      return Object.assign({}, state, {
        users: [...state.users, action.user],
      });
    default:
      return state;
  }
};

export default userDataReducer;
