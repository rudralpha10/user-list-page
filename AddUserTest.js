import { useState } from "react";

function AddUserTest() {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@test.com", role: "Admin", status: "Active" },
    { id: 2, name: "Alice Smith", email: "alice@test.com", role: "User", status: "Inactive" },
    { id: 3, name: "Bob Brown", email: "bob@test.com", role: "User", status: "Active" }
  ]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (name.trim() === "") newErrors.name = "Name is required";
    if (email.trim() === "") {
      newErrors.email = "Email is required";
    } else if (!email.includes("@")) {
      newErrors.email = "Email is not valid";
    }
    if (role === "") newErrors.role = "Role is required";
    if (status === "") newErrors.status = "Status is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    const newUser = {
      id: Date.now(),
      name,
      email,
      role,
      status
    };

    setUsers([...users, newUser]);

    setName("");
    setEmail("");
    setRole("");
    setStatus("");
    setErrors({});
  };

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
        <h2 style={{ marginBottom: "10px" }}>Add User</h2>

        <form onSubmit={handleSubmit} style={{ marginBottom: "30px" }}>
          <input
            style={inputStyle}
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <p style={errorStyle}>{errors.name}</p>}

          <input
            style={inputStyle}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p style={errorStyle}>{errors.email}</p>}

          <select
            style={inputStyle}
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="">Select Role</option>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
          </select>
          {errors.role && <p style={errorStyle}>{errors.role}</p>}

          <div style={{ marginBottom: "10px" }}>
            <label>
              <input
                type="radio"
                value="Active"
                checked={status === "Active"}
                onChange={(e) => setStatus(e.target.value)}
              />{" "}
              Active
            </label>

            <label style={{ marginLeft: "20px" }}>
              <input
                type="radio"
                value="Inactive"
                checked={status === "Inactive"}
                onChange={(e) => setStatus(e.target.value)}
              />{" "}
              Inactive
            </label>
          </div>
          {errors.status && <p style={errorStyle}>{errors.status}</p>}

          <button style={addBtn}>Submit</button>
        </form>

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

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "8px"
};

const errorStyle = {
  color: "red",
  fontSize: "13px",
  marginBottom: "8px"
};

const addBtn = {
  padding: "10px 20px",
  backgroundColor: "#28a745",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer"
};

const thStyle = { padding: "12px" };
const tdStyle = { padding: "12px" };

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

export default AddUserTest;
