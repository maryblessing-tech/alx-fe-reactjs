function ProfileSettings() {
  return (
    <div style={{ padding: '20px', backgroundColor: '#fff3e0', borderRadius: '8px' }}>
      <h2>Profile Settings</h2>
      <form>
        <div style={{ marginBottom: '10px' }}>
          <label>Email Notifications: </label>
          <input type="checkbox" defaultChecked />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Dark Mode: </label>
          <input type="checkbox" />
        </div>
        <button type="button">Save Settings</button>
      </form>
    </div>
  );
}

export default ProfileSettings;