import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
    </div>
  );
};

export { Navbar };
