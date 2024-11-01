import { useState } from "react";
import Friend from "./Friend";
import FriendForm from "./FriendForm";

function FriendsContainer({ friends, onAddFriend, onSelectFriend }) {
  const [showAddFriendForm, setShowAddFriendForm] = useState(false);
  const closeAddFriendForm = () => setShowAddFriendForm(false);
  return (
    <div className="sidebar">
      <ul>
        {friends.map((friend) => (
          <Friend
            data={friend}
            key={friend.id}
            onSelectFriend={onSelectFriend}
          />
        ))}
      </ul>
      <FriendForm
        formStatus={showAddFriendForm}
        closeAddFriendForm={closeAddFriendForm}
        onAddFriend={onAddFriend}
      />
      <button
        className="button"
        onClick={() => setShowAddFriendForm(!showAddFriendForm)}
      >
        {showAddFriendForm ? "Close" : "Add Friend"}
      </button>
    </div>
  );
}

export default FriendsContainer;
