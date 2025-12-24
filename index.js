const express = require("express");
const Joi = require("joi");

const app = express();
app.use(express.json());

let users = [
  {
    id: 1,
    name: "John",
    email: "john@test.com",
    role: "user",
    status: "active",
  },
  {
    id: 2,
    name: "Admin",
    email: "admin@test.com",
    role: "admin",
    status: "active",
  },
];

const updateUserSchema = Joi.object({
  name: Joi.string().optional(),
  email: Joi.string().email().optional(),
  role: Joi.string().valid("admin", "user").optional(),
  status: Joi.string().valid("active", "inactive").optional(),
}).min(1);

app.put("/api/users/:id", (req, res) => {
  const userId = Number(req.params.id);

  if (isNaN(userId)) {
    return res.status(400).json({
      success: false,
      message: "Invalid user id",
    });
  }

  const { error } = updateUserSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      success: false,
      message: error.details[0].message,
    });
  }

  const user = users.find((u) => u.id === userId);
  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found",
    });
  }

  if (req.body.email) {
    const emailExists = users.some(
      (u) => u.email === req.body.email && u.id !== userId
    );
    if (emailExists) {
      return res.status(400).json({
        success: false,
        message: "Email already exists",
      });
    }
  }

  if (req.body.name) user.name = req.body.name;
  if (req.body.email) user.email = req.body.email;
  if (req.body.role) user.role = req.body.role;
  if (req.body.status) user.status = req.body.status;

  return res.status(200).json({
    success: true,
    message: "User updated successfully",
    data: user,
  });
});

app.delete("/api/users/:id", (req, res) => {
  const userId = Number(req.params.id);

  if (isNaN(userId)) {
    return res.status(400).json({
      success: false,
      message: "Invalid user id",
    });
  }

  const userIndex = users.findIndex((u) => u.id === userId);
  if (userIndex === -1) {
    return res.status(404).json({
      success: false,
      message: "User not found",
    });
  }

  users.splice(userIndex, 1);

  return res.status(200).json({
    success: true,
    message: "User deleted successfully",
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
