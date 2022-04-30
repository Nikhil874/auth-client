import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export const Signin = () => {
  const navigate = useNavigate();
  const userObj = {
    email: "",
    password: "",
  };
  const [userData, setUserData] = useState(userObj);

  const handleChange = (e) => {
    const { value, id } = e.target;
    setUserData({ ...userData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
    axios
      .post("https://restaro-server.herokuapp.com/login",userData)
      .then((res) => {
        console.log(res.data);
        alert("User Login successfully");
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
            id="email"
            placeholder="Email or Phone"
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
        <br />
        <button id="forgotButton" onClick={() => navigate("/forgot")}>
          Forgot Password
        </button>
      </div>
    </>
  );
};