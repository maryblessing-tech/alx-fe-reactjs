import { Routes, Route, Link } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

function Profile() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Profile Page</h1>

      <nav style={{ marginBottom: "20px", padding: "10px", backgroundColor: "#f0f0f0" }}>
        <Link to="details" style={{ marginRight: "15px" }}>
          Profile Details
        </Link>
        <Link to="settings">
          Profile Settings
        </Link>
      </nav>

      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
}

export default Profile;