# Real-Estate-Platform-User
# User Service

The User Service is a microservice in the Real Estate Platform that handles user registration, authentication, and user data management. It provides functionality for creating, updating, retrieving, and deleting user information, along with JWT-based authentication.

## Features

- **User Registration**: Create a new user by providing their details.
- **User Login**: Authenticate a user using their email and password, generating a JWT token for secure access.
- **Get All Users**: Retrieve all users from the database.
- **Get User by ID**: Retrieve a specific user by their unique ID.
- **Update User**: Update a user's information by their ID.
- **Delete User**: Delete a user from the database.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Tokens) for authentication
- bcryptjs for password hashing

## Setup

### Prerequisites

- Node.js
- MongoDB instance (can use MongoDB Atlas for cloud-based DB)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/AshwiniKhandagale/Real-Estate-Platform-User.git
Navigate to the project folder:

bash

cd user-service
Install the dependencies:

bash

npm install
Create a .env file in the root directory with the following environment variables:

env

MONGO_URI=mongodb://localhost:27017/Real_Estate_Plateform_User
JWT_SECRET=your-secret-key
Start the server:

bash

npm start
Endpoints
POST /api/users/register
Description: Register a new user.

Request Body:


{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "password": "password123"
}
Response:


{
  "message": "User registered successfully",
  "user": {
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com"
  }
}
POST /api/users/login
Description: Log in a user and generate a JWT token.

Request Body:


{
  "email": "john.doe@example.com",
  "password": "password123"
}
Response:


{
  "message": "Login successful",
  "token": "JWT_TOKEN"
}
GET /api/users/
Description: Get all users.

Response:

[
  {
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com"
  },
  {
    "firstName": "Jane",
    "lastName": "Smith",
    "email": "jane.smith@example.com"
  }
]
GET /api/users/:id
Description: Get user by ID.

Response:

json
Copy code
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com"
}
PUT /api/users/:id
Description: Update user information.

Request Body:


{
  "firstName": "Updated Name"
}
Response:

{
{
  "message": "User updated successfully",
  "user": {
    "firstName": "Updated Name",
    "lastName": "Doe",
    "email": "john.doe@example.com"
  }
}
DELETE /api/users/:id
Description: Delete a user by ID.

Response:

{
  "message": "User deleted successfully"
}
