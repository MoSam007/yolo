# Explanation of Kubernetes Deployment for Application with MongoDB

This document provides an explanation of the Kubernetes deployment for a sample application with MongoDB using Minikube.

## Choice of Kubernetes Objects

- **Deployment**: Used to define the desired state for the backend and frontend applications. Deployments manage ReplicaSets, ensuring that the specified number of pod replicas are running at all times.
- **Service**: Kubernetes Service objects expose the backend, frontend, and MongoDB Express deployments to other components within the cluster, providing a stable endpoint for accessing the applications.
- **StatefulSet**: Used for deploying MongoDB, which is a stateful application. StatefulSets ensure stable network identities for MongoDB pods, enabling direct peer-to-peer communication and maintaining data consistency.

## Method for Exposing Pods to Internet Traffic

- The services for the backend, frontend, and MongoDB Express deployments are of type `LoadBalancer`, which exposes the services to the internet. This allows external access to the applications via the Minikube IP and NodePort.

## Use of Persistent Storage

- Persistent storage is used for MongoDB data to ensure data persistence. Volumes are mounted to store MongoDB data across pod restarts, ensuring data integrity and availability.

## Git Workflow

- The repository follows a typical Git workflow, with changes being made on feature branches and merged into the main branch via pull requests. Continuous integration (CI) tools can be integrated to automate testing and deployment processes.

## Docker Image Tag Naming Standards

- Docker images are tagged with version numbers (e.g., `1.0`) for version control and ease of identification. Semantic versioning principles can be followed to manage image versions effectively.
