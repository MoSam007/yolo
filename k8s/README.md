# Yolo-App Deployment with Kubernetes

This project demonstrates the deployment of a multi-component application using Kubernetes. The application consists of a frontend, backend, MongoDB database, and Mongo Express for database management.

## Prerequisites

- Make sure [Kubernetes](https://kubernetes.io/) is installed
- Make sure [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/) is configured

## Deployment steps

1. **Apply MongoDB resources**:
``` markdown 
kubectl apply -f mongodb-statefulset.yml 
kubectl apply -f mongodb-service.yml 
```

2. **Apply Backend resources**:
``` markdown 
kubectl apply -f backend-deployment.yml
kubectl apply -f backend-service.yml
```

3. **Apply Frontend resources**:
``` markdown 
kubectl apply -f frontend-deployment.yml
kubectl apply -f frontend-service.yml
```

4. **Apply Mongo-Express resources**:
``` markdown 
 kubectl apply -f mongo-express-deployment.yml
 kubectl apply -f mongo-express-service.yml
```

5. **Access the application**:
- Frontend: [Yolo-app](http://a2cd55b4cfb6d46a2a7f253d8c7476d8-530763216.us-west-2.elb.amazonaws.com/)
- Mongo Express: [Yolodb](http://aa9b277be2dd64233912349a23347468-1407590778.us-west-2.elb.amazonaws.com)