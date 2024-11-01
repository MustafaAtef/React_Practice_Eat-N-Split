import { useState } from "react";
import FriendsContainer from "./FriendsContainer";
import SplitComponent from "./SplitComponent";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [splitBillWith, setSplitBillWith] = useState(null);
  const handleAddFriend = (friend) => {
    setFriends([...friends, friend]);
  };
  const handleShowSplitForm = (friend) => {
    setSplitBillWith(friend);
  };

  const handleSplitBill = (details) => {
    setFriends(
      friends.map((f) => {
        if (f.id !== details.friend.id) return f;
        return {
          id: f.id,
          name: f.name,
          image: f.image,
          balance:
            details.whoPaying === "+"
              ? f.balance + details.friendExpenses
              : f.balance - details.myExpenses,
        };
      })
    );

    setSplitBillWith(null);
  };
  return (
    <div className="app">
      <FriendsContainer
        friends={friends}
        onAddFriend={handleAddFriend}
        onSelectFriend={handleShowSplitForm}
      />
      <SplitComponent friend={splitBillWith} onSplitBill={handleSplitBill} />
    </div>
  );
}

export default App;
