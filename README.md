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

- **InvenioRDM** for research data management platform
- **PostgreSQL** for database
- **OpenSearch** for search functionality
- **Redis** for caching and message queuing
- **Docker Compose** for containerization

**Note**: Backend is now InvenioRDM under `/invenio`. Legacy FastAPI backend has been archived.

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

### 2. Start InvenioRDM Backend

```bash
cd invenio

# Copy environment template (you'll need to create .env manually)
cp .env.local.template .env

# Bootstrap the entire stack
./bootstrap.sh
```

This will:

- Start PostgreSQL, OpenSearch, Redis, and InvenioRDM services
- Initialize the database and search indices
- Create custom Vedra roles and permissions
- Bootstrap an admin user (admin@local.test / admin123)

**InvenioRDM will be available at:** http://localhost:8080

### 3. Configure Frontend Environment

Create a `.env.local` file in the project root:

```bash
VITE_RDM_API_BASE=http://localhost:8080
```

### 4. Start the Frontend

```bash
# From the project root
npm install
npm start
```

The application will be available at:

- Frontend: http://localhost:3000
- InvenioRDM API: http://localhost:8080
- InvenioRDM UI: http://localhost:8080 (admin interface)

## Development

### InvenioRDM Backend

The backend uses InvenioRDM with custom Vedra roles and permissions:

```
invenio/
├── docker-compose.yml     # Service orchestration
├── .env                   # Environment variables
├── Makefile              # Development commands
├── bootstrap.sh          # Initial setup script
├── app.yaml              # Production overrides
└── invenio-vedra/        # Custom extension
    └── invenio_vedra/
        ├── permissions.py # Custom role-based permissions
        ├── identities.py  # Identity management
        ├── config.py      # Extension configuration
        └── ext.py         # Extension entry point
```

#### Custom Roles and Permissions

Vedra implements a hierarchical institutional access model:

**Institution Admin Accounts:**

- `institution_admin_university` - Monitor all for university; create college accounts; create/approve DOIs
- `institution_admin_college` - Monitor all for college; create department accounts; create/approve DOIs
- `institution_admin_department` - Monitor dept; approve student DOIs; create DOIs

**Institution Student Account:**

- `institution_student` - Submit drafts/requests; cannot publish

**Individual & Publisher Accounts:**

- `individual` - Can create & publish their own
- `publisher` - Can create & publish their own
- `founder` - Can create & publish their own (special pricing)

#### Development Commands

```bash
cd invenio

# Start services
make up

# Initialize database and create roles
make init roles users

# View logs
make logs

# Reset everything
make reset
```

### Frontend Development

The frontend is a React TypeScript application with:

- **Context API** for state management
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Router** for navigation

#### Key Components

- `src/contexts/AuthContext.tsx` - Authentication state management
- `src/contexts/LanguageContext.tsx` - Multi-language support
- `src/lib/rdm.ts` - InvenioRDM API client
- `src/pages/Dashboard.tsx` - Main dashboard
- `src/pages/Home.tsx` - Landing page
- `src/pages/Upload.tsx` - Publication upload interface
- `src/pages/Resource.tsx` - Publication detail view

## InvenioRDM API Integration

The frontend integrates with InvenioRDM's REST APIs:

### Records API

- `GET /api/records` - Search and list records
- `GET /api/records/{id}` - Get specific record
- `POST /api/records` - Create new record (authenticated)
- `PUT /api/records/{id}` - Update record (authenticated)
- `DELETE /api/records/{id}` - Delete record (authenticated)

### Files API

- `GET /api/records/{id}/files` - List record files
- `GET /api/records/{id}/files/{filename}/content` - Download file

### Authentication

InvenioRDM uses session-based authentication. The frontend can integrate with:

- Local accounts (email/password)
- OAuth providers (Google, GitHub, etc.)
- SAML/OIDC for institutional SSO

### Custom Headers for Role Assignment

For development, you can set custom headers:

- `X-Vedra-Role`: Role name (e.g., "institution_admin_university")
- `X-Vedra-Scope`: Organization scope (e.g., "UNI:ENG:CS")

## Deployment

### AWS EC2 + ALB Deployment

1. **Launch EC2 Instance** (t3.medium recommended)
2. **Install Docker and Docker Compose**
3. **Create ACM Certificate** for your domain
4. **Set up Application Load Balancer** with target group pointing to EC2:8080
5. **Deploy using the same docker-compose.yml**:

```bash
# On EC2 instance
git clone <your-repo>
cd Vedra/invenio

# Copy production environment
cp .env.local.template .env
# Edit .env with production values

# Use production override
docker-compose -f docker-compose.yml -f app.yaml up -d
```

6. **Configure DNS** to point to ALB
7. **Set up SSL termination** on ALB (no nginx needed)

### Production Build

```bash
# Frontend
npm run build

# Backend (InvenioRDM is already containerized)
cd invenio
make up
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
