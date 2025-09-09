# Vedra

A modern web application for academic paper management and DOI registration.

## Features

- **User Authentication**: Secure login and registration system
- **Dashboard**: Comprehensive overview of papers and analytics
- **Paper Management**: Upload and manage academic papers
- **DOI Registration**: Register Digital Object Identifiers for papers
- **Role-based Access**: Different user roles (individual, student, admin, etc.)
- **Responsive Design**: Works on desktop and mobile devices

## Tech Stack

### Frontend

- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Router DOM** for navigation
- **Lucide React** for icons

### Backend

- **FastAPI** (Python) for API server
- **PostgreSQL** for database
- **JWT** for authentication
- **Docker** for containerization

## Quick Start

### Prerequisites

- Node.js 18+ and npm
- Docker and Docker Compose
- Git

### 1. Clone the Repository

```bash
git clone <repository-url>
cd Vedra
```

### 2. Configure Environment Variables

**First-time setup:**

```bash
cd server
cp .env.example .env
```

**Edit the `.env` file with your configuration:**

```bash
# Database Configuration
DATABASE_URL=postgresql+psycopg://postgres:postgres@localhost:5432/vedra

# JWT Configuration (change this to a secure random string)
JWT_SECRET=your-secret-key-here

# Frontend Configuration
FRONTEND_ORIGIN=http://localhost:3000
```

### 3. Start the Backend

#### Option A: Using Docker Compose (Recommended)

```bash
# From the project root
docker-compose up -d
```

#### Option B: Manual Setup

```bash
cd server

# Start PostgreSQL
docker run -d --name vedra-pg -e POSTGRES_PASSWORD=postgres -p 5432:5432 postgres:16

# Create database
docker exec vedra-pg psql -U postgres -c "CREATE DATABASE vedra;"

# Build and run the server
docker build -t vedra-server .
docker run --rm -p 8000:8000 --env-file .env vedra-server
```

### 4. Start the Frontend

```bash
# From the project root
npm install
npm start
```

The application will be available at:

- Frontend: http://localhost:3000
- Backend API: http://localhost:8000
- API Documentation: http://localhost:8000/docs

## Development

### Backend Development

The backend is a FastAPI application with the following structure:

```
server/
├── app/
│   ├── models.py          # Database models
│   ├── routes/            # API routes
│   ├── auth_utils.py      # Authentication utilities
│   ├── deps.py           # Dependencies
│   └── main.py           # FastAPI app
├── .env                  # Environment variables (create from .env.example)
├── .env.example          # Environment template (safe to share)
└── pyproject.toml        # Python dependencies
```

#### Environment Variables

**Setup:**

1. Copy the example file: `cp .env.example .env`
2. Edit `.env` with your actual values
3. **Never commit `.env` to version control**

**Required Variables:**

```env
DATABASE_URL=postgresql+psycopg://postgres:postgres@localhost:5432/vedra
JWT_SECRET=your-secret-key-here
FRONTEND_ORIGIN=http://localhost:3000
```

**Security Notes:**

- Use a strong, random JWT secret in production
- The `.env.example` file is safe to share and commit
- The actual `.env` file is ignored by Git for security

### Frontend Development

The frontend is a React TypeScript application with:

- **Context API** for state management
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Router** for navigation

#### Key Components

- `src/contexts/AuthContext.tsx` - Authentication state management
- `src/components/LoginModal.tsx` - Login form
- `src/components/SignupModal.tsx` - Registration form
- `src/pages/Dashboard.tsx` - Main dashboard
- `src/pages/Home.tsx` - Landing page

## API Endpoints

### Authentication

- `POST /auth/register` - Register a new user
- `POST /auth/login` - Login user
- `GET /auth/me` - Get current user info

### Papers

- `POST /papers/uploads` - Create upload session (mock)

## User Roles

- **individual**: Basic user access
- **student**: Student-level access
- **admin**: Administrative access
- **institution**: Institution-level access

## Database Schema

### Users Table

- `id`: Primary key
- `email`: Unique email address
- `name`: User's full name
- `password_hash`: Hashed password
- `role`: User role
- `scope_code`: Institution/organization code
- `is_active`: Account status
- `created_at`: Account creation timestamp
- `updated_at`: Last update timestamp

### Papers Table

- `id`: Primary key
- `title`: Paper title
- `authors_json`: JSON array of authors
- `checksum`: File checksum
- `size_bytes`: File size
- `bucket_key`: Storage key
- `status`: Paper status (DRAFT/READY/PUBLISHED)
- `owner_id`: Foreign key to users table
- `scope_code`: Institution code
- `created_at`: Creation timestamp

## Deployment

### Production Build

```bash
npm run build
```

### Docker Deployment

```bash
# Build frontend
npm run build

# Build backend
cd server
docker build -t vedra-server .

# Run with docker-compose (create docker-compose.yml)
docker-compose up -d
```

## Team Collaboration

### Sharing with Teammates

**Safe to share:**

- `.env.example` file (template with no sensitive data)
- Repository code
- Documentation

**Never share:**

- `.env` file (contains sensitive data)
- Database passwords
- JWT secrets
- API keys

### Setting up for a new team member:

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd Vedra
   ```

2. **Set up environment:**

   ```bash
   cd server
   cp .env.example .env
   # Edit .env with your values
   ```

3. **Start the application:**
   ```bash
   docker-compose up -d
   npm install && npm start
   ```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.
