import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { deleteFromFriends } from "./actions";
import Button from "./removebutton";
import UserAvatar from "./useravatar";

const BestFriendCard = (props) => {
  return (
    <div className="friendCard">
      <UserAvatar src={props.friend.photo} width={100} height={100} />
      <div className="information">
        <div>{props.friend.name}</div>
        <div>
          From <b>{props.friend.location}</b>
        </div>
        <div>Phone: {props.friend.phone}</div>
        <div>Age: {props.friend.age}</div>
      </div>
      <Button
        label="Удалить"
        onClick={() => props.deleteFromFriends(props.friend)}
      />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    friends: this.state
  };
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({ deleteFromFriends }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(BestFriendCard);
