# Wory - A Freelancing Website Backend

This repository contains the backend code for Wory, a freelancing website. The backend is built using Node.js, Express, and TypeScript, with MongoDB as the database. It includes features for user authentication, project management, and project tagging.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Server](#running-the-server)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Features

- User signup/login with role-based authentication (Client and Freelancer)
- CRUD operations for projects (only Clients can create, update, and delete projects)
- Fetch projects by tags

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following installed on your local machine:

- Node.js
- npm (Node Package Manager)
- MongoDB

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/wory-backend.git
    cd wory-backend
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

### Configuration

Create a `.env` file in the root directory and add the following environment variables:

```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
   ```


Replace `your_mongodb_connection_string` with your actual MongoDB connection string and `your_secret_key` with a secret key of your choice.

### Running the Server

To start the server in development mode, run:

```bash
npm start
   ```



### API Endpoints

Auth Routes
POST /api/auth/signup - Sign up a new user
POST /api/auth/login - Log in an existing user
Project Routes
POST /api/projects - Create a new project (Client only)
PUT /api/projects/:projectId - Update a project (Client only)
DELETE /api/projects/:projectId - Delete a project (Client only)
GET /api/projects - List all projects
GET /api/projects/tag/:tag - Fetch projects by tag


