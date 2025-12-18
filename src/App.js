function App() {
  const users = [
    { id: 1, name: "John Doe", email: "john@test.com", role: "Admin", status: "Active" },
    { id: 2, name: "Alice Smith", email: "alice@test.com", role: "User", status: "Inactive" },
    { id: 3, name: "Bob Brown", email: "bob@test.com", role: "User", status: "Active" }
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f4f6f8",
        padding: "40px",
        fontFamily: "Arial"
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>User List</h2>

        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ backgroundColor: "#f0f0f0", textAlign: "left" }}>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Email</th>
              <th style={thStyle}>Role</th>
              <th style={thStyle}>Status</th>
              <th style={thStyle}>Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id} style={{ borderBottom: "1px solid #ddd" }}>
                <td style={tdStyle}>{user.name}</td>
                <td style={tdStyle}>{user.email}</td>
                <td style={tdStyle}>{user.role}</td>
                <td style={tdStyle}>
                  <span
                    style={{
                      padding: "4px 10px",
                      borderRadius: "12px",
                      fontSize: "12px",
                      color: "#fff",
                      backgroundColor:
                        user.status === "Active" ? "#28a745" : "#dc3545"
                    }}
                  >
                    {user.status}
                  </span>
                </td>
                <td style={tdStyle}>
                  <button style={editBtn}>Edit</button>
                  <button style={deleteBtn}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const thStyle = {
  padding: "12px"
};

const tdStyle = {
  padding: "12px"
};

const editBtn = {
  padding: "6px 12px",
  marginRight: "8px",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer"
};

const deleteBtn = {
  padding: "6px 12px",
  backgroundColor: "#dc3545",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer"
};

export default App;
