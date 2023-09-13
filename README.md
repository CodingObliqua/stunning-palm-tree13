# E-Commerce Website Back End

## Table of Contents

- [Description](#description)
- [Acceptance Criteria](#acceptance-criteria)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- [Contributing](#contributing)
- [Questions](#questions)

---

## Description

As a manager at an internet retail company, you want a robust back end for your e-commerce website that leverages the latest technologies. This back end will empower your company to compete effectively with other e-commerce businesses.

This project provides a functional Express.js API that uses Sequelize, a powerful Object-Relational Mapping (ORM) library for Node.js, to interact with a MySQL database. It offers API routes for managing categories, products, and tags, enabling you to perform essential CRUD (Create, Read, Update, Delete) operations on your e-commerce data.

---

## Acceptance Criteria

### Database Configuration

- [x] Provide your database name, MySQL username, and MySQL password in an environment variable file (`.env` or similar).

### Database Setup

- [x] Run schema and seed commands to create a development database and populate it with test data.

### Server Initialization

- [x] Start the application to launch your server and ensure Sequelize models are synced with the MySQL database.

### API Routes

- [x] Access API GET routes for categories, products, and tags using a tool like Insomnia Core. Verify that the data is returned in a well-formatted JSON format.

### CRUD Operations

- [x] Test API POST, PUT, and DELETE routes in Insomnia Core to create, update, and delete data in your database.

---

## Technologies Used

- Node.js
- Express.js
- Sequelize (with MySQL)
- JavaScript

---

## Installation

To run this application on your local machine, follow these steps:

1. Clone this repository:

   ```bash
   git clone <repository-url>
2. cd <project-directory> 
3. npm install
4. set up environment variables by creating .env file
DB_NAME=your_database_name
DB_USER=your_mysql_username
DB_PASSWORD=your_mysql_password 
5. npm run schema npm run seed
6. npm start

# Usage
With the server running, you can use a tool like Insomnia Core or any API testing tool to interact with the provided API routes. Refer to the API Routes section below for details on the available routes and their usage.
# API Routes
GET Routes:

- /api/categories: Retrieve a list of all categories.
- /api/products: Retrieve a list of all products.
- /api/tags: Retrieve a list of all tags.
POST Routes:

- /api/categories: Create a new category.
- /api/products: Create a new product.
- /api/tags: Create a new tag.
PUT Routes:

- /api/categories/:id: Update an existing category by ID.
- /api/products/:id: Update an existing product by ID.
- /api/tags/:id: Update an existing tag by ID.
DELETE Routes:

- /api/categories/:id: Delete a category by ID.
- /api/products/:id: Delete a product by ID.
- /api/tags/:id: Delete a tag by ID.

# Contributing
Contributions to this project are welcome! Feel free to open issues or pull requests if you have suggestions, bug fixes, or feature additions.

# Questions
If you have any questions or need further assistance, please feel free to reach out.

Contact Information:

GitHub: CodingObliqua
