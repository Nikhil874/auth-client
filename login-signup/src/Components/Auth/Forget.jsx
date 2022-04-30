import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export const ForgotPassword = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setUserData(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("https://restaro-server.herokuapp.com/forget",{ email: userData }).then((res) => {
      console.log(res.data)
      if (res.data.status) {
        navigate(`/reset/${userData}`);
      } else {
        alert("Please create your account");
      }
    });
  };

  return (
    <>
      <div id="signupForm">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="nameOrPassword"
            placeholder="Please enter mobile number or email  "
            onChange={handleChange}
            value={userData.password}
          />
          <input type="submit" id="signUpsubmit" />
        </form>
        <br />
      </div>
    </>
  );
};