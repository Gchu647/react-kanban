DROP DATABASE IF EXISTS react_kanban;
DROP USER IF EXISTS react_kanban_user;

CREATE USER react_kanban_user WITH PASSWORD 'password';
CREATE DATABASE react_kanban WITH OWNER react_kanban_user;
