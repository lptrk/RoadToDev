ecommerce-platform/
│
├── frontend/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── services/
│   │   ├── ...
│   ├── Dockerfile
│   └── package.json
│
├── backend/
│   ├── user-service/
│   │   ├── src/
│   │   ├── Dockerfile
│   │   └── pom.xml
│   ├── order-service/
│   │   ├── src/
│   │   ├── Dockerfile
│   │   └── pom.xml
│   ├── payment-service/
│   │   ├── src/
│   │   ├── Dockerfile
│   │   └── pom.xml
│   └── discovery-service/
│       ├── src/
│       ├── Dockerfile
│       └── pom.xml
│
├── kafka/
│   ├── config/
│   ├── data/
│   ├── logs/
│   └── docker-compose.yml
│
├── monitoring/
│   ├── prometheus/
│   │   ├── prometheus.yml
│   │   └── Dockerfile
│   └── grafana/
│       ├── provisioning/
│       ├── dashboards/
│       ├── Dockerfile
│       └── config/
│
├── deployment/
│   ├── kubernetes/
│   │   ├── frontend-deployment.yaml
│   │   ├── backend/
│   │   │   ├── user-service-deployment.yaml
│   │   │   ├── order-service-deployment.yaml
│   │   │   ├── payment-service-deployment.yaml
│   │   │   └── discovery-service-deployment.yaml
│   │   ├── kafka/
│   │   │   ├── kafka-deployment.yaml
│   │   │   └── zookeeper-deployment.yaml
│   │   └── monitoring/
│   │       ├── prometheus-deployment.yaml
│   │       ├── grafana-deployment.yaml
│   │       └── grafana-dashboard-configmap.yaml
│   └── docker-compose.yml
│
└── README.md