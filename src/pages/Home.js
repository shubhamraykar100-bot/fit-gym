import React from "react";

function Home() {
  const joinGym = () => {
    alert("Welcome to Fit Gym!");
  };

  return (
    <div className="home">
      <h2>Welcome to Fit Gym</h2>
      <p>Your fitness journey starts here. Stay strong, healthy, and active!</p>
      <button onClick={joinGym}>Join Now</button>
    </div>
  );
}

export default Home;
