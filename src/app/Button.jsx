import React from "react";

import UsersList from "./UsersList";
import Preloader from "./Preloader";

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: false
    };
  }

  handleClick() {
    this.setState({ loading: true });
    let users = this.props.onClick();

    users.then((response) => {
      this.setState(() => {
        return { users: response, loading: false };
      });
    });
  }

  render() {
    if (this.state.loading) return <Preloader />;

    return (
      <div>
        <button onClick={() => this.handleClick()}>{this.props.label}</button>
        <UsersList users={this.state.users} />
      </div>
    );
  }
}
