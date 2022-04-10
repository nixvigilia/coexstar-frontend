import React, { createContext, Component } from "react";
import axios from "axios";
export const MyContext = createContext();

// Define the base URL
const Axios = axios.create({
  baseURL: "https://coexstar-backend.herokuapp.com/",
});

class MyContextProvider extends Component {
  // Root State
  state = {
    newUserName: null,
    newUserEmail: null,
    isRegistered: false,
    message: null,
  };

  // Toggle between Login & Signup page
  toggleNav = () => {
    const showLogin = !this.state.showLogin;
    this.setState({
      ...this.state,
      showLogin,
    });
  };

  registerUser = async (user) => {
    // Sending the user registration request
    const register = await Axios.post("register.php", {
      name: user.name,
      email: user.email,
      password: user.password,
    });
    console.log(register);
    if (register.data.success) {
      this.setState({
        ...this.state,
        newUserName: user.name,
        newUserEmail: user.email,
        isRegistered: true,
        message: register.data.message,
      });
    }
    return register.data;
  };

  render() {
    const contextValue = {
      rootState: this.state,
      toggleNav: this.toggleNav,
      registerUser: this.registerUser,
    };
    return (
      <MyContext.Provider value={contextValue}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default MyContextProvider;
