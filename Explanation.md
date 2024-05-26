# Explanation of Roles in Ansible Playbook

This document provides an overview of the roles used in the Ansible playbook, their functions, and how they are organized and executed to set up the environment for the "Yolo" project.

## Overview

The Ansible playbook is designed to automate the setup and configuration of a Vagrant-provisioned server to run the "Yolo" e-commerce application. The playbook is organized using roles to promote modularity and reuse. Each role encapsulates a specific set of tasks needed to configure different components of the application stack.

## Roles

### 1. clone-repo

- **Function**: This role is responsible for cloning my remote repository.
- **Tasks**:
  - Clone my remote github repository.

### 2. install-docker

- **Function**: This role sets up Docker on the server, allowing containerized applications to be run.
- **Tasks**:
  - Install Docker.
  - Add the current user to the Docker group to manage Docker as a non-root user.
  - Ensure Docker service is enabled and running.

### 3. install-docker-compose and run-docker-compose

- **Function**: This role sets up Docker compose on the server, and allows the containerized apps to be run.
- **Tasks**:
  - Install Docker compose
  - Run Docker compose

### 4. frontend

- **Function**: This role handles the setup of the frontend application.
- **Tasks**:
  - Clone the frontend application repository from GitHub.
  - Install necessary dependencies (e.g., Node.js, npm).
  - Build the frontend application.
  - Configure the application to be served by Nginx.

### 5. backend

- **Function**: This role is responsible for setting up the backend application.
- **Tasks**:
  - Clone the backend application repository from GitHub.
  - Install necessary dependencies (e.g., Python, Django).
  - Apply database migrations.
  - Start the backend application using Docker or a process manager.

### 6. database

- **Function**: This role sets up the database used by the application.
- **Tasks**:
  - Install database server (e.g., PostgreSQL, MySQL).
  - Create the necessary databases and users.
  - Configure the database for remote access if needed.
  - Ensure the database service is enabled and running.

### 7. test-connectivity

- **Function**: This role ensures that all the host connections are available.
- **Tasks**:
  - pings all hosts

## Playbook Execution Order

The playbook is executed sequentially, with roles being applied in the order they are listed. This ensures that dependencies are correctly managed, and the environment is set up in the right order. Here is the order of execution:

1. **test-connectivity**: Sets up the web server first, which will later serve the frontend application.
2. **update-cache**: Sets up Docker, which is required to run containerized applications.
3. **install-docker**: Installs docker and all its dependencies
4. **install-docker-compose**: Installs docker compose 
5. **clone-repo**: Clones the current project github repository
6. **frontend**: Sets up the frontend application, which will be served by Nginx.
7. **backend**: Sets up the backend application, which will handle the application's business logic.
8. **database**: Sets up the database, which the backend application will use to store data.
9. **run-docker-compose**: Runs docker compose


## Variables and Configuration

- **Variables**: Variables were used to configure role-specific settings such as package versions, file paths, and credentials. These vars were defined in `group_vars` and `host_vars` files and referenced within roles.
- **Ansible Configuration**: The `ansible.cfg` file is configured to point to the correct inventory file and set necessary options for SSH connections and retries.

