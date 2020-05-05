import { addUser } from "../actions/addUser";
import { getIP } from "../actions/getIP";
import { connect } from "react-redux";
import UserCmp from "../components/UserCmp";
import IPCmp from "../components/IPCmp";

export const UserCtr = connect(
  (state) => ({
    users: state.userDataReducer.users,
  }),
  { addUser }
)(UserCmp);

export const IPCtr = connect(
  (state) => ({
    ipDetails: state.ipReducer.ipDetails,
  }),
  { onGetIP: getIP }
)(IPCmp);

// THIS FILE CAN BE USED TO DEFINE ALL THE DISPLAY CONTAINERS THAT WRAPS THE COMPONENTS
