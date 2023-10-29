# Book Management API

This is a Node.js API for managing a collection of books. It provides basic CRUD (Create, Read, Update, Delete) operations for books, allowing users to add new books, view a list of all books, view details of a specific book by its ID, update a book's details, and delete a book. The application uses MongoDB as the database to store book data.

## Table of Contents

- [Book Management API](#book-management-api)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
    - [CRUD Operations](#crud-operations)
    - [Database](#database)
  - [Prerequisites](#prerequisites)
  - [Getting Started](#getting-started)
  - [Folder Structure](#folder-structure)
  - [API Endpoints](#api-endpoints)
  - [Video Demonstration](#video-demonstration)
  - [Documentation](#documentation)

## Features

### CRUD Operations

Users can perform the following CRUD operations on the books:

1. **Add a New Book**
   - Add a new book to the database with attributes like title, author, and summary.

2. **View a List of All Books**
   - Retrieve a list of all books from the database.

3. **View Details of a Specific Book by ID**
   - Retrieve detailed information about a specific book by providing its unique ID.

4. **Update a Book's Details**
   - Modify the details of an existing book, such as its title, author, or summary.

5. **Delete a Book**
   - Remove a book from the database using its unique ID.

### Database

The application utilizes MongoDB as the database for storing book data. You can choose to set up a MongoDB instance on a local server, virtual machine, or use a cloud solution like MongoDB Atlas.

## Prerequisites

Before you get started, make sure you have the following installed on your system:

- Node.js: You can download it [here](https://nodejs.org/).
- MongoDB: You can install it locally or use a cloud-based solution like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
- Git: You can download it [here](https://git-scm.com/).

## Getting Started

1. Clone this repository to your local machine using Git:

   ```bash
   git clone https://github.com/webcoderspeed/book-management-api
   ```

2. Change to the project directory:

   ```bash
   cd book-management-api
   ```

3. Install the project dependencies using npm:

   ```bash
   npm install
   ```

4. Create a `.env` file in the project root directory and provide the following configuration:

   ```env
   NODE_ENV = development
   MONGO_URL = mongodb://localhost:27017/book-management-api
   PORT = 1337
   ORIGIN = http://localhost:3000
   ```

5. Start the application in development mode using nodemon:

   ```bash
   npm run dev
   ```

The API will be running locally at `http://localhost:1337`.

## Folder Structure

The project is organized into the following folder structure:

- `src`
  - `config`
    - `connectDB.js`: Configuration for connecting to the MongoDB database.
  - `constants`
    - `index.js`: Constants used in the application.
  - `controllers`
    - `book.controllers.js`: Controllers for handling book-related operations.
  - `routes`
    - `book.routes.js`: Express routes for book-related endpoints.
    - `index.js`: Main route file that imports and configures all routes.
  - `middlewares`
    - `error.middlewares.js`: Middleware for handling errors, including 404 Not Found and general error handling.
    - `security.middleware.js`: Middleware for implementing security features like CORS and data sanitization.
  - `validators`
    - `book.validators.js`: Input validation for book data.
  - `app.js`: The main application file.

## API Endpoints

The following are the API endpoints and their usage:

- **POST /api/v1/books**
  - Create a new book by providing a JSON object with title, author, and summary.
- **GET /api/v1/books**
  - Retrieve a list of all books.
- **GET /api/v1/books/:id**
  - Retrieve details of a specific book by providing its unique ID.
- **PUT /api/v1/books/:id**
  - Update the details of a specific book by providing its unique ID and a JSON object with the updated data.
- **DELETE /api/v1/books/:id**
  - Delete a book by providing its unique ID.

## Video Demonstration

You can watch a video demonstration of the API, which includes all CRUD operations and various test cases, including edge cases. [View the Video on YouTube](https://www.youtube.com/watch?v=cl03QnieZIQ).

## Documentation

During the development process, the following decisions and assumptions were made:

- The API uses the Express.js framework for handling HTTP requests.
- The database connection is configured through environment variables using the `dotenv` library.
- Input validation is performed using the `joi` library to ensure data consistency.
- Error handling for HTTP requests is implemented, and appropriate status codes and error messages are provided.
- The application provides detailed logging using the `morgan` library for easier debugging.
- `Nodemon` is used in development mode to automatically restart the server when code changes are detected.

If you have any questions or need further assistance, please feel free to reach out to the project maintainers. Enjoy managing your book collection with this API!