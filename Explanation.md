# Explanation of Roles in Ansible Playbook

This document provides an overview of the roles used in the Ansible playbook, their functions, and how they are organized and executed to set up the environment for the "Yolo" project.

## Overview

The Ansible playbook is designed to automate the setup and configuration of a Vagrant-provisioned server to run the "Yolo" e-commerce application. The playbook is organized using roles to promote modularity and reuse. Each role encapsulates a specific set of tasks needed to configure different components of the application stack.

## Roles

### 1. geerlingguy.nginx

- **Function**: This role is responsible for installing and configuring the Nginx web server.
- **Tasks**:
  - Install Nginx package.
  - Configure Nginx to serve the web application.
  - Ensure the Nginx service is enabled and running.

### 2. geerlingguy.docker

- **Function**: This role sets up Docker on the server, allowing containerized applications to be run.
- **Tasks**:
  - Install Docker and Docker Compose.
  - Add the current user to the Docker group to manage Docker as a non-root user.
  - Ensure Docker service is enabled and running.

### 3. frontend

- **Function**: This role handles the setup of the frontend application.
- **Tasks**:
  - Clone the frontend application repository from GitHub.
  - Install necessary dependencies (e.g., Node.js, npm).
  - Build the frontend application.
  - Configure the application to be served by Nginx.

### 4. backend

- **Function**: This role is responsible for setting up the backend application.
- **Tasks**:
  - Clone the backend application repository from GitHub.
  - Install necessary dependencies (e.g., Python, Django).
  - Apply database migrations.
  - Start the backend application using Docker or a process manager.

### 5. database

- **Function**: This role sets up the database used by the application.
- **Tasks**:
  - Install database server (e.g., PostgreSQL, MySQL).
  - Create the necessary databases and users.
  - Configure the database for remote access if needed.
  - Ensure the database service is enabled and running.

### 6. docker_containers

- **Function**: This role manages the Docker containers for the application components.
- **Tasks**:
  - Define Docker Compose configurations for the frontend, backend, and database services.
  - Bring up the Docker containers using Docker Compose.
  - Ensure the containers are running and healthy.

## Playbook Execution Order

The playbook is executed sequentially, with roles being applied in the order they are listed. This ensures that dependencies are correctly managed, and the environment is set up in the right order. Here is the order of execution:

1. **geerlingguy.nginx**: Sets up the web server first, which will later serve the frontend application.
2. **geerlingguy.docker**: Sets up Docker, which is required to run containerized applications.
3. **frontend**: Sets up the frontend application, which will be served by Nginx.
4. **backend**: Sets up the backend application, which will handle the application's business logic.
5. **database**: Sets up the database, which the backend application will use to store data.
6. **docker_containers**: Manages the Docker containers, ensuring all parts of the application are running in their respective containers.

## Variables and Configuration

- **Variables**: Variables were used to configure role-specific settings such as package versions, file paths, and credentials. These vars were defined in `group_vars` and `host_vars` files and referenced within roles.
- **Ansible Configuration**: The `ansible.cfg` file is configured to point to the correct inventory file and set necessary options for SSH connections and retries.

