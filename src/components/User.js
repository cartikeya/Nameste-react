import { useState } from "react";

const User = ({ name, location }) => {
  const [count, setcount] = useState(0);
  const [count2, setcount2] = useState(2);
  return (
    <div className="user-card">
      <h1>count: {count}</h1>
      <button
        onClick={() => {
          setcount(count + 1);
        }}
      >
        click
      </button>
      <h1>count 2: {count2}</h1>
      <h1>Name: {name}</h1>
      <h2>Location: {location}</h2>
      <h2>contact: @carti.unreal</h2>
    </div>
  );
};

export default User;
