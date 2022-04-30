import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div
        id="links"
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          fontSize: "15px",
        }}
      >
        <Link to={"/signin"} style={{ textDecoration: "none" }}>
          Login
        </Link>
        <Link to={"/signup"} style={{ textDecoration: "none" }}>
          Signup
        </Link>
      </div>
      <hr />
    </>
  );
};