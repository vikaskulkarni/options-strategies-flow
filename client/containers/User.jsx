import React, { Fragment, Component } from "react";
import { addUser } from "../actions/addUser";
import { connect } from "react-redux";

class User extends Component {
  render() {
    return (
      <Fragment>
        <div>USERS from Redux Store: {this.props.users}</div>
        <div>
          ADD User:
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => this.props.addUser("user-1")}
          >
            Add User
          </button>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.userDataReducer.users,
});

export default connect(mapStateToProps, { addUser })(User);
