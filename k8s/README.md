# Yolo-App Deployment with Kubernetes

This project demonstrates the deployment of a multi-component application using Kubernetes. The application consists of a frontend, backend, MongoDB database, and Mongo Express for database management.

## Prerequisites

- Make sure [Kubernetes](https://kubernetes.io/) is installed
- Make sure [kubectl] is configured

## Deployment steps

1. **Apply MongoDB resources**:
- ` kubectl apply -f mongodb-statefulset.yml` 
- ` kubectl apply -f mongodb-service.yml `

2. **Apply Backend resources**:
- `kubectl apply -f backend-deployment.yml`
- `kubectl apply -f backend-service.yml`

3. **Apply Frontend resources**:
- ` kubectl apply -f frontend-deployment.yml`
- ` kubectl apply -f frontend-service.yml`





