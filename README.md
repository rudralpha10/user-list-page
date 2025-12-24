TASK 3: Update & Delete Users API

UPDATE
<img width="1600" height="900" alt="image" src="https://github.com/user-attachments/assets/50ccae94-e057-4850-bb73-a21e601084f4" />

Delete
<img width="1600" height="900" alt="image" src="https://github.com/user-attachments/assets/39606297-e95a-46dc-ae7d-c6f509383446" />

TASK 2: Add User Form

![WhatsApp Image 2025-12-20 at 13 11 14](https://github.com/user-attachments/assets/be36d497-8b36-4d51-b57f-c12bd1d67b44)
TASK 1: User List Page
<img width="1599" height="787" alt="image" src="https://github.com/user-attachments/assets/aed182b1-74ec-470d-8033-5bf3e584635c" />

User List Management Project

This project demonstrates the fundamentals of user management using React (frontend) and Node.js + Express (backend) with REST APIs.

📌 Task 1: Create & List Users (Backend)
Description

In Task 1, a basic backend was implemented to handle user creation and listing.

Features

Create a new user

List all existing users

Store user data in an in-memory array

Each user has a unique id

Concepts Covered

Express server setup

REST API basics

Handling request body

JSON responses

Basic data storage (in-memory)

📌 Task 2: Create User Form (Frontend)
Description

In Task 2, a React-based frontend was created to allow users to enter user details through a form and display the user list in a clean UI.

Features

User input form (name, email, role, status)

Display users in a table/list format

Basic UI styling

Component-based structure

Concepts Covered

React components

JSX

State management

Form handling

List rendering using .map()

📌 Task 3: Update & Delete Users API (Backend)
Description

Task 3 extends the backend by adding Update and Delete functionality for existing users using REST APIs.

APIs Implemented
🔹 Update User

Method: PUT

Endpoint: /api/users/:id

Updates user details using user ID

Supports partial updates

Validates input using Joi

🔹 Delete User

Method: DELETE

Endpoint: /api/users/:id

Deletes a user by ID

Returns proper success or error response
