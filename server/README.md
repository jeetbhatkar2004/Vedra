# Vedra Backend

FastAPI backend for Vedra with PostgreSQL database and JWT authentication.

## Features

- **User Authentication**: JWT-based authentication with registration and login
- **Database Integration**: PostgreSQL with SQLAlchemy ORM
- **Password Security**: Bcrypt password hashing
- **API Documentation**: Auto-generated Swagger/OpenAPI docs
- **Docker Support**: Containerized deployment

## Quick Start

### Option 1: Using the Start Script (Recommended)

```bash
./start.sh
```

### Option 2: Manual Setup

1. **Create Environment File**

   ```bash
   # Copy the example file
   cp .env.example .env

   # Edit .env with your actual values
   # The example file contains:
   # DATABASE_URL=postgresql+psycopg://postgres:postgres@localhost:5432/vedra
   # JWT_SECRET=your-secret-key-here
   # FRONTEND_ORIGIN=http://localhost:3000
   ```

2. **Start PostgreSQL**

   ```bash
   docker run -d --name vedra-pg -e POSTGRES_PASSWORD=postgres -p 5432:5432 postgres:16
   ```

3. **Create Database**

   ```bash
   docker exec vedra-pg psql -U postgres -c "CREATE DATABASE vedra;"
   ```

4. **Build and Run Server**
   ```bash
   docker build -t vedra-server .
   docker run --rm -p 8000:8000 --env-file .env vedra-server
   ```

## API Endpoints

### Authentication

- `POST /auth/register` - Register a new user
- `POST /auth/login` - Login user
- `GET /auth/me` - Get current user info

### Papers

- `POST /papers/uploads` - Create upload session (mock)

### Health Check

- `GET /health` - Server health status

## Database Schema

### Users Table

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(64) DEFAULT 'individual',
    scope_code VARCHAR(64),
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### Papers Table

```sql
CREATE TABLE papers (
    id SERIAL PRIMARY KEY,
    title VARCHAR(512),
    authors_json JSON,
    checksum VARCHAR(128),
    size_bytes INTEGER,
    bucket_key VARCHAR(1024) NOT NULL,
    status VARCHAR(32) DEFAULT 'DRAFT',
    owner_id INTEGER REFERENCES users(id),
    scope_code VARCHAR(64),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## Development

### Local Development Setup

1. **Install Python Dependencies**

   ```bash
   pip install -e .
   ```

2. **Set Environment Variables**

   ```bash
   export DATABASE_URL="postgresql+psycopg://postgres:postgres@localhost:5432/vedra"
   export JWT_SECRET="dev-secret-change"
   export FRONTEND_ORIGIN="http://localhost:3000"
   ```

3. **Run Development Server**
   ```bash
   uvicorn app.main:app --reload
   ```

### Database Migrations

Create tables:

```bash
python -c "
from app.models import Base
from app.deps import engine
Base.metadata.create_all(engine)
print('Tables created successfully!')
"
```

## Environment Variables

| Variable          | Description                  | Default                 |
| ----------------- | ---------------------------- | ----------------------- |
| `DATABASE_URL`    | PostgreSQL connection string | Required                |
| `JWT_SECRET`      | Secret key for JWT tokens    | Required                |
| `FRONTEND_ORIGIN` | Frontend URL for CORS        | `http://localhost:3000` |

### Security Notes

- **Use `.env.example` as a template** - Copy it to `.env` and fill in your values
- **Never commit `.env` to version control** - It contains sensitive data
- **Use strong JWT secrets** - Generate random strings for production
- **The `.env.example` file is safe to share** - It contains no sensitive data

## API Documentation

Once the server is running:

- **Swagger UI**: http://localhost:8000/docs
- **ReDoc**: http://localhost:8000/redoc

## Testing

### Test User Registration

```bash
curl -X POST "http://localhost:8000/auth/register" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "password": "password123",
    "role": "individual"
  }'
```

### Test User Login

```bash
curl -X POST "http://localhost:8000/auth/login" \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123"
  }'
```

## Docker Commands

### Build Image

```bash
docker build -t vedra-server .
```

### Run Container

```bash
docker run --rm -p 8000:8000 --env-file .env vedra-server
```

### View Logs

```bash
docker logs <container-id>
```

## Troubleshooting

### Database Connection Issues

- Ensure PostgreSQL is running: `docker ps | grep vedra-pg`
- Check database exists: `docker exec vedra-pg psql -U postgres -c "\l"`
- Verify connection string in `.env` file

### Port Conflicts

- Change port mapping: `docker run --rm -p 8001:8000 --env-file .env vedra-server`
- Update frontend API URL accordingly

### Permission Issues

- Make start script executable: `chmod +x start.sh`
- Check Docker permissions if running on Linux
