# Online Notes Frontend

This is the frontend React application for the Online Notes project, built with React, TypeScript, and React Router. It connects to a Django REST Framework backend to provide user authentication and note management.

---

## Features

- User registration and login with token-based authentication
- Protected routes for viewing, creating, and updating notes
- Notes listing with edit and delete functionality
- Form for creating and updating notes with title, content, and public/private toggle
- Persistent authentication token stored in `localStorage`
- Axios instance configured with token interceptor for authenticated API requests

---

## Technologies Used

- React 18+
- TypeScript
- React Router v6
- Axios for HTTP requests
- Tailwind CSS for styling (based on class names)
- LocalStorage for token persistence

---

## Installation and Setup

1. **Clone the repository**

   ```bash
   git clone 
   cd online-notes-frontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**

   ```bash
   npm start
   # or
   yarn start
   ```

4. **Ensure backend API is running at `http://127.0.0.1:3000`**

---

## Project Structure

```
src/
│
├── Components/
│   ├── Login.tsx          # Login form and authentication
│   ├── Register.tsx       # User registration form
│   ├── Navbar.tsx         # Navigation bar with login/logout links
│   ├── Notes.tsx          # List and manage user's notes
│   ├── NoteForm.tsx       # Create and update note form
│
├── utils/
│   └── axiosInstance.ts   # Axios instance with token interceptor
│
└── App.tsx                # Main app with routing and protected routes
```

---

## Usage

- **Login**: Navigate to `/login` to enter username and password. On success, token is saved to `localStorage` and user is redirected to `/notes`.
- **Register**: Navigate to `/register` to create a new user account.
- **Notes**: Authenticated users can view their notes at `/notes`, create new notes at `/create`, and update existing notes at `/update/:id`.
- **Logout**: Click the "Logout" button in the navbar to clear the token and return to the login page.

---

## Authentication

- Uses token-based authentication.
- Token is stored in `localStorage` under the key `"token"`.
- Axios automatically attaches the token in the `Authorization` header for API requests.
- Protected routes redirect unauthenticated users to the login page.

---

## API Endpoints (Backend)

- `POST /api-token-auth/` — Obtain auth token
- `POST /api/users/register/` — Register new user
- `GET /api/notes/` — List user’s notes
- `POST /api/notes/` — Create note
- `GET /api/notes/:id/` — Retrieve note
- `PUT /api/notes/:id/` — Update note
- `DELETE /api/notes/:id/` — Delete note

---

## Notes

- The app assumes the backend API is running locally at `http://127.0.0.1:3000`.
- The `username` is currently stored only in local state during registration/login; consider persisting it if needed.
- Tailwind CSS classes are used for styling; adjust or replace with your preferred styling method.

---

## License

This project is licensed under the MIT License.

---

## Contact

For issues or feature requests, please open an issue in the repository or contact the maintainer.
