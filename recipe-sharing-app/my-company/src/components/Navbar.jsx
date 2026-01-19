import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        padding: "15px",
        backgroundColor: "#222",
        display: "flex",
        gap: "20px",
        justifyContent: "center"
      }}
    >
      <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
        Home
      </Link>
      <Link to="/about" style={{ color: "#fff", textDecoration: "none" }}>
        About
      </Link>
      <Link to="/services" style={{ color: "#fff", textDecoration: "none" }}>
        Services
      </Link>
      <Link to="/contact" style={{ color: "#fff", textDecoration: "none" }}>
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;
