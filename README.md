# 🏠 Gestion Immobilier - Real Estate Rental Management

A full-stack application for managing real estate rentals, built with a Spring Boot backend and a React frontend.

## 🚀 Getting Started

### Prerequisites

- **Java 21+**
- **Maven 3.6+**
- **PostgreSQL 13+** (with pgAdmin4)
w
### 1. Database Setup (PostgreSQL / pgAdmin4)

1. Open **pgAdmin4**
2. Create a new database: `gestion_immobilier`
3. Default credentials: `postgres` / `changeme`
4. Host: `localhost:5432`

### 2. Run the Backend

```bash
cd backend

# Download dependencies and run
mvn spring-boot:run

# OR build and run JAR
mvn clean package -DskipTests
java -jar target/backend-0.0.1-SNAPSHOT.jar
```

The API will be available at: **http://localhost:8080**

### 3. Frontend (React)

The frontend will be set up separately in the `frontend/` directory.

```bash
cd frontend
npm install
npm start
```

Frontend will be available at: **http://localhost:3000**

## 🔐 API Security

JWT-based authentication is configured. Update the secret in `application.properties` before going to production:

```properties
app.jwt.secret=YourStrongSecretKeyHere
```

## 📦 Tech Stack

| Layer      | Technology          |
|------------|---------------------|
| Backend    | Spring Boot 3.3     |
| Language   | Java 21             |
| Database   | PostgreSQL (pgAdmin4) |
| Security   | Spring Security + JWT |
| Build      | Maven               |
| Frontend   | React (coming soon) |
| CI/CD      | Jenkins             |

## 📝 License

MIT