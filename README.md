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


 **  git clone https://github.com/AshwiniKhandagale/Real-Estate-Platform-User.git**
   
Navigate to the project folder:

bash

cd user-service
Install the dependencies:
**npm install**


Create a .env file in the root directory with the following environment variables:

env
**MONGO_URI=mongodb://localhost:27017/Real_Estate_Plateform_User
JWT_SECRET=your-secret-key**


Start the server:

**npm start**
