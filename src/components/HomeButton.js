import React from "react";

function Home() {
  // Define the function inside the component
  const joinGym = () => {
    alert("Welcome to Fit Gym!");
  };

  return (
    <div className="home">
      <h2>Welcome to Fit Gym</h2>
      <p>Your fitness journey starts here. Stay strong, healthy, and active!</p>
      {/* Attach the function with React syntax */}
      <button onClick={joinGym}>Join Now</button>
    </div>
  );
}

export default Home;
