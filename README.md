# Requirements
Make sure that you have the following installed:
- [node](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-18-04) 
- npm 
- [MongoDB](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/) and start the mongodb service with `sudo service mongod start`
- Navigate to the Client Folder 
 `cd client`
- Run the folllowing command to install the dependencies 
 `npm install`
- Run the folllowing to start the app
 `npm start`
- Open a new terminal and run the same commands in the backend folder
 `cd ../backend`
 `npm install`
 `npm start`

 # E-Commerce Website Dockerization Guide

## Explanation

### Choice of Base Image

1. **Frontend Client (React):** For the frontend client, we chose the Node.js LTS version as the base image for building the application. We utilized the official Node.js Docker image, which provides a stable environment for running JavaScript applications.

2. **Backend Server (Node.js):** Similar to the frontend client, we opted for the Node.js LTS version as the base image for the backend server. We used the official Node.js Docker image to ensure compatibility and stability.

3. **MongoDB Database:** Instead of building a custom Docker image for MongoDB, we opted to use the official MongoDB Docker image available on Docker Hub. This image provides a pre-configured MongoDB database server, simplifying the setup process.

### Dockerfile Directives

1. **Multi-stage Builds:** To reduce image size and optimize build times, we utilized multi-stage builds in both the frontend and backend Dockerfiles. This approach allows us to separate the build environment from the production environment and ensures that the final image only includes necessary dependencies and artifacts.

2. **Copying Source Code:** We copied the application source code into the Docker image using the `COPY` directive. This includes copying the `package.json` and `package-lock.json` files to install dependencies and copying the rest of the application code.

3. **Dependency Installation:** We installed dependencies using the `npm install` command within the Dockerfile to ensure that all required packages are installed within the container environment.

4. **Build Process:** We executed the build process within the Dockerfile using the appropriate commands (`npm run build` for both the frontend client and backend server) to generate production-ready assets.

### Docker-Compose Networking

1. **Port Mapping:** We defined port mappings in the Docker Compose file to expose the necessary ports for communication between containers and with external clients. The frontend client listens on port 80, the backend server listens on port 3000, and MongoDB listens on port 27017.

2. **Inter-Container Communication:** We specified dependencies between services using the `depends_on` directive in the Docker Compose file. This ensures that containers are started in the correct order, with dependencies being resolved before dependent services start.

### Docker-Compose Volume Definition and Usage

We did not include volume definitions in this setup as the application does not require persistent storage. However, volumes can be defined in the Docker Compose file and mounted to appropriate directories within the containers if data persistence is required.

### Git Workflow

We followed a typical Git workflow for developing and deploying the application. This includes creating feature branches for development, performing code reviews through pull requests, and merging changes into the main branch once reviewed and approved.

### Debugging Measures

If the applications fail to run successfully, we would review Docker logs for any error messages and examine the Dockerfiles and Docker Compose file for misconfigurations. Additionally, we would check for any issues related to dependencies, environment variables, or networking configurations.

### Docker Image Tag Naming Standards

For easy identification and versioning of Docker images, we followed the convention of `<application_name>:tag`. We ensured that each Docker image is tagged with a descriptive name, such as `frontend:latest`, `backend:1.0`, and `mongodb:4.4`, to facilitate easy management and deployment.
