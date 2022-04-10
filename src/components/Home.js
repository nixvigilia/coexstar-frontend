import React, { useContext } from "react";
import { MyContext } from "../contexts/MyContext";

// Importing the Login & Register Componet
import Register from "./Register";

function Home() {
  const { rootState, logoutUser } = useContext(MyContext);
  const { isRegistered, newUserName, newUserEmail, message } = rootState;

  // If user completes registration
  if (isRegistered) {
    return (
      <div className="userInfo">
        <h1>{message}</h1>
        <h1>{newUserName}</h1>
        <div className="_email">
          <span>{newUserEmail}</span>
        </div>
        {/* <button onClick={logoutUser}>Logout</button> */}
      </div>
    );
  } else {
    return <Register />;
  }
}

export default Home;
