<h1>Nest.js PostgreSQL API</h1>
<br>
This repository contains a Nest.js-based API that allows users to interact with a PostgreSQL database. It implements CRUD (Create, Read, Update, Delete) operations, error handling, validation for user input, and JWT-based authentication and authorization.

<h2>Table of Contents</h2>
<br>
<ol>
  <ul>
    
Installation
<br>

Usage
<br>

Folder Structure
<br>

Configuration
<br>

Testing
<br>

API Endpoints
<br>

Dependencies
<br>

License
<br>
  </ul>


</ol>


<h3>Installation</h3>
<br>
<ol>
  <ul>
    Clone the repository:
#git clone <repository-url>

Navigate to the project directory:
#cd <project-directory>

Install dependencies:
#npm install

Usage
Start the application:
#npm run start
Access the API endpoints using a tool like Postman or cURL.
  </ul>
</ol>



<h3>Folder Structure</h3>
The src directory contains the following structure:
<ul>
  <ol>
    entities: Contains database entity classes (e.g., user.entity.ts).
users: Module for user-related functionality (e.g., user service, controller).
auth: Module for authentication and authorization.
app.module.ts: Main module of the application, contains configuration settings.
main.ts: Entry point of the application.
  </ol>
</ul>

<h3>Configuration</h3>
The application is configured to connect to a PostgreSQL database. Database connection settings are specified in the TypeOrmModule.forRoot() method in app.module.ts. Ensure that the database credentials and connection details are correctly configured.

<h3>Testing</h3>

The application can be tested using tools like Postman or cURL. Refer to the API Endpoints section for details on available endpoints and how to use them.

<h3>API Endpoints
</h3>
<ul>
  <ol>
    The API provides the following endpoints:

POST /auth/login: Endpoint for user authentication. Requires email and password in the request body. Returns a JWT token upon successful authentication.
POST /users: Endpoint to create a new user. Requires name, email, and password in the request body.
GET /users: Endpoint to get all users. Requires a valid JWT token in the request header for authentication.
GET /users/:id: Endpoint to get a specific user by ID. Requires a valid JWT token in the request header for authentication.
PUT /users/:id: Endpoint to update a user by ID. Requires a valid JWT token in the request header for authentication.
DELETE /users/:id: Endpoint to delete a user by ID. Requires a valid JWT token in the request header for authentication.
  </ol>
</ul>

<h3>Dependencies</h3>
The main dependencies used in this project are:

@nestjs/common: Nest.js framework for building scalable applications.
@nestjs/typeorm: Nest.js integration with TypeORM for database interactions.
class-validator: Library for object validation.
bcrypt: Library for password hashing.
jsonwebtoken: Library for JWT token generation and verification.
pg: PostgreSQL client for Node.js.

