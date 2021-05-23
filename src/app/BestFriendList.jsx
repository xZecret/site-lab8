import React from "react";
import BestFriendCard from "./BestFriendCard";
import { connect } from "react-redux";
import "./style.css";

class BestFriendsList extends React.Component {
  render() {
    return (
      <div id="friend">
        {this.props.friends.map((friend) => (
          <BestFriendCard friend={friend} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ friends: state.friends });

export default connect(mapStateToProps)(BestFriendsList);
