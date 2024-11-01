import { useState } from "react";

function SplitComponent({ friend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [myExpenses, setMyExpenses] = useState("");
  const [whoPaying, setWhoPaying] = useState("+");
  const friendExpenses = bill ? bill - myExpenses : 0;
  if (!friend) return null;
  const handleSubmit = (e) => {
    e.preventDefault();
    onSplitBill({ bill, myExpenses, friendExpenses, whoPaying, friend });
    setBill("");
    setMyExpenses("");
    setWhoPaying("+");
  };
  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>split the bill with {friend.name}</h2>
      <label>Bill Value</label>
      <input
        type="number"
        value={bill}
        onChange={(e) =>
          +e.target.value === 0 ? setBill("") : setBill(+e.target.value)
        }
      />
      <label>Your Expense</label>
      <input
        type="number"
        value={myExpenses}
        onChange={(e) =>
          +e.target.value === 0
            ? setMyExpenses("")
            : setMyExpenses(+e.target.value)
        }
      />
      <label>{friend.name} Expense</label>
      <input
        type="number"
        disabled
        value={friendExpenses === 0 ? "" : friendExpenses}
      />
      <label>Who's paying the bill?</label>
      <select value={whoPaying} onChange={(e) => setWhoPaying(e.target.value)}>
        <option value="+">You</option>
        <option value="-">{friend.name}</option>
      </select>
      <button className="button">Split Bill</button>
    </form>
  );
}

export default SplitComponent;
