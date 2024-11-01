function Friend({ data, onSelectFriend }) {
  return (
    <li>
      <img src={data.image} alt={data.name} />
      <h3>{data.name}</h3>
      {data.balance === 0 ? (
        <p>You and {data.name} are even!</p>
      ) : data.balance > 0 ? (
        <p className="green">
          {data.name} owes you {Math.abs(data.balance)}€
        </p>
      ) : (
        <p className="red">
          You owe {data.name} {Math.abs(data.balance)}€
        </p>
      )}
      <button className="button" onClick={() => onSelectFriend(data)}>
        Select
      </button>
    </li>
  );
}

export default Friend;
