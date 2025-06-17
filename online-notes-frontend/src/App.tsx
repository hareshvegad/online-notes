import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Notes from "./Components/Notes";
import NoteForm from "./Components/NoteForm";

function App() {
  const token = localStorage.getItem("token");

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* Protected Routes */}
        <Route path="/notes" element={token ? <Notes /> : <Navigate to="/login" />} />
        <Route path="/create" element={token ? <NoteForm /> : <Navigate to="/login" />} />
        <Route path="/update/:id" element={token ? <NoteForm /> : <Navigate to="/login" />} />
        
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
