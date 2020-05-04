import { addUser } from "../actions/addUser";
import { connect } from "react-redux";
import UserCmp from "../components/UserCmp";

export const UserCtr = connect(
  (state) => ({
    users: state.userDataReducer.users,
  }),
  { addUser }
)(UserCmp);

// THIS CONTAINER CAN BE USED TO DEFINE ALL THE DISPLAY CONTAINERS THAT WRAPS THE COMPONENTS
