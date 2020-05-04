import React, { Fragment, Component } from "react";

class UserCmp extends Component {
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

export default UserCmp;
