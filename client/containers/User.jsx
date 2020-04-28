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
          <input
            type="button"
            value="ADD"
            onClick={() => this.props.addUser("user-1")}
          />
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.userDataReducer.users,
});

export default connect(mapStateToProps, { addUser })(User);
