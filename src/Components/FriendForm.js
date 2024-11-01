import { useState } from "react";

function FriendForm({ formStatus, onAddFriend, closeAddFriendForm }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddFriend({ name, image, balance: 0, id: Date.now() });
    closeAddFriendForm();
    setName("");
    setImage("");
  };
  return (
    formStatus && (
      <form className="form-add-friend" onSubmit={handleSubmit}>
        <label>Friend Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Image Url</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button className="button" type="submit">
          Add
        </button>
      </form>
    )
  );
}

export default FriendForm;
