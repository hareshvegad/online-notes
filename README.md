# Online Notes Backend

This is the backend API for an online notes application built with Django 5.2.2 and Django REST Framework. It provides user registration, authentication, and CRUD operations for notes.

---

## Features

- User registration and token-based authentication
- Create, read, update, and delete personal notes
- Notes are private to each authenticated user
- CORS enabled for all origins (for frontend integration)
- Uses SQLite database for development

---

## Technologies Used

- Python 3.x
- Django 5.2.2
- Django REST Framework
- Django REST Framework Token Authentication
- SQLite (default development database)
- django-cors-headers for CORS support

---

## Installation and Setup

1. **Clone the repository**

   ```bash
   git clone 
   cd online_notes_backend
   ```

2. **Create and activate a virtual environment**

   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**

   ```bash
   pip install -r requirements.txt
   ```

4. **Apply migrations**

   ```bash
   python manage.py migrate
   ```

5. **Run the development server**

   ```bash
   python manage.py runserver
   ```

---

## API Endpoints

### Authentication

- `POST /api-token-auth/`  
  Obtain authentication token by providing username and password.

### User Registration

- `POST /api/users/register/`  
  Register a new user by providing `username`, `email`, and `password`.

### Notes

- `GET /api/notes/`  
  List all notes belonging to the authenticated user.

- `POST /api/notes/`  
  Create a new note. Fields: `title`, `content`, `is_public` (optional).

- `GET /api/notes//`  
  Retrieve a specific note by ID (must belong to the authenticated user).

- `PUT /api/notes//`  
  Update a specific note.

- `DELETE /api/notes//`  
  Delete a specific note.

---

## Project Structure

```
online_notes_backend/
│
├── online_notes_backend/
│   ├── settings.py        # Django settings including REST framework and CORS config
│   ├── urls.py            # URL routing for admin, notes, users, and auth token
│   └── wsgi.py
│
├── notes/
│   ├── models.py          # Note model with user foreign key
│   ├── serializers.py     # Note serializer
│   ├── urls.py            # Notes API endpoints
│   └── views.py           # Notes API views with permissions
│
├── users/
│   ├── serializers.py     # User registration serializer
│   ├── urls.py            # User registration endpoint
│   └── views.py           # User registration view
│
└── db.sqlite3             # SQLite database file (auto-generated)
```

---

## Settings Highlights

- `DEBUG = True` for development only.
- `CORS_ALLOW_ALL_ORIGINS = True` to allow frontend requests from any origin.
- `REST_FRAMEWORK` configured to use token authentication and require authentication by default.
- SQLite database configured as default.

---

## Notes

- Passwords are hashed using Django's built-in user model.
- Notes are private and filtered by authenticated user.
- The API uses token authentication; clients must include the token in the `Authorization` header as `Token `.

---

## License

This project is licensed under the MIT License.

---

## Contact

For any questions or issues, please open an issue in the repository or contact the maintainer.
