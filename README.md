# Online Notes Project

This repository contains both the backend and frontend applications for the **Online Notes** project, a full-stack note-taking web application.

---

## Overview

- **Backend:** Built with Django 5.2.2 and Django REST Framework, providing a RESTful API for user authentication, registration, and note management.
- **Frontend:** Built with React and TypeScript, featuring user interfaces for registration, login, and managing notes with protected routes and token-based authentication.

---

## Folder Structure

```
online_notes_backend/       # Django backend API
online-notes-frontend/      # React frontend application
```

---

## Backend (online_notes_backend)

### Features

- User registration and token authentication
- CRUD operations for notes (title, content, public/private)
- Notes are private to each authenticated user
- CORS enabled for frontend integration
- SQLite database for development

### Setup

1. Navigate to `online_notes_backend`
2. Create and activate a Python virtual environment
3. Install dependencies (`pip install -r requirements.txt`)
4. Run migrations (`python manage.py migrate`)
5. Start server (`python manage.py runserver`)

### API Endpoints

- `POST /api/users/register/` — Register user
- `POST /api-token-auth/` — Obtain auth token
- `GET/POST /api/notes/` — List and create notes
- `GET/PUT/DELETE /api/notes//` — Retrieve, update, delete notes

---

## Frontend (online-notes-frontend)

### Features

- User registration and login forms
- Protected routes for notes management
- Token stored in `localStorage` and attached to API requests
- Notes listing, creation, update, and deletion UI
- Responsive and styled with Tailwind CSS

### Setup

1. Navigate to `online-notes-frontend`
2. Install dependencies (`npm install` or `yarn install`)
3. Start development server (`npm start` or `yarn start`)
4. Ensure backend is running at `http://127.0.0.1:3000`

---

## Running the Project

1. Start the backend server first.
2. Then start the frontend development server.
3. Access the frontend at `http://localhost:3000` (or the port your React app runs on).
4. Register a new user, login, and manage your notes.

---

## Notes

- The frontend expects the backend API to be available at `http://127.0.0.1:3000`.
- Authentication uses token-based scheme; tokens are saved in `localStorage`.
- The backend uses SQLite by default; for production, configure a more robust database.
- CORS is enabled in backend to allow frontend requests.

---

## License

MIT License

---

## Contact

For issues or contributions, please open an issue or pull request in the repository.
