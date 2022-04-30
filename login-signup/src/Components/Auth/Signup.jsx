import axios from "axios";
import { useState } from "react";

export const Signup = () => {
  const userObj = {
    user_name:"",
    email:"",
    password:"",
  };
  const [userData, setUserData] = useState(userObj);

  const handleChange = (e) => {
    const { value, id } = e.target;
    setUserData({ ...userData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(userData);


    axios
      .post("https://restaro-server.herokuapp.com/register",userData)
      .then((res) => {
          console.log(res.data)
        alert("User Registered successfully");
      })
      .catch((er) => {
        alert("Something Went wrong Please try again");
      });

    setUserData(userObj);
  };

  return (
    <>
      <div id="signupForm">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="user_name"
            placeholder="Name"
            onChange={handleChange}
            value={userData.user_name}
          />
          <input
           
            id="email"
            placeholder="Email or Mobile"
            onChange={handleChange}
            value={userData.email}
          />
          <input
            type="Password"
            id="password"
            placeholder="Password"
            onChange={handleChange}
            value={userData.password}
          />
          <input type="submit" id="signUpsubmit" />
        </form>
      </div>
    </>
  );
};