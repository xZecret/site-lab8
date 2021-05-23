export const addToFriends = (user) => {
  return {
    type: "ADD_TO_FRIENDS",
    payload: {
      name: user.name.first + " " + user.name.last,
      location: user.location.city,
      phone: user.phone,
      age: user.dob.age,
      photo: user.picture.large
    }
  };
};
export const deleteFromFriends = (friend) => {
  return {
    type: "REMOVE_FROM_FRIENDS",
    payload: friend
  };
};
