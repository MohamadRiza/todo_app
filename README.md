# To-Do App

A To-Do application built with:
- **Frontend**: React, Vite, Tailwind CSS
- **Backend**: Express.js, Node.js, PostgreSQL

## Features
- Add, and delete to-do items.
- Responsive design with a clean UI.
- RESTful API for CRUD operations.

## Getting Started
1. Clone the repository:
   ```bash
   git clone https://github.com/MohamadRiza/todo_app.git

## Edit .env from backend
- PORT=5000
- DB_USER={USER NAME}
- DB_HOST=localhost
- DB_NAME=todo_app_db
- DB_PASSWORD={PSWD}
- DB_PORT={PGDB PSWD}

## Create DB using PGSQL
```bash
CREATE DATABASE todo_app_db;

CREATE TABLE todos (
  id SERIAL PRIMARY KEY,
  heading VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
