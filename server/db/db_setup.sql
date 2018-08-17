DROP DATABASE IF EXISTS react_kanban;
DROP USER IF EXISTS react_kanban_user;

CREATE USER react_kanban_user WITH PASSWORD 'password';
CREATE DATABASE react_kanban WITH OWNER react_kanban_user;

CREATE TABLE cards (
  id SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(255) NOT NULL,
  body VARCHAR(1024) NOT NULL,
  priority_id INTEGER REFERENCES priorities(id) NOT NULL,
  status_id INTEGER REFERENCES statuses(id) NOT NULL,
  created_by INTEGER REFERENCES users(id) NOT NULL,
  assigned_to INTEGER REFERENCES users(id),
  created_at TIMESTAMP NOT NULL DEFAULT now(),
  updated_at TIMESTAMP NOT NULL DEFAULT now()
);