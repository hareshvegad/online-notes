import { useEffect, useState } from "react";
import API from "../utils/axiosInstance";
import { Link } from "react-router-dom";

const Notes = () => {
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    const res = await API.get("/api/notes/");
    setNotes(res.data);
  };

  const handleDelete = async (id: number) => {
    await API.delete(`/api/notes/${id}/`);
    fetchNotes();
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Your Notes</h2>
      <ul className="space-y-4">
        {notes.map((note: any) => (
          <li key={note.id} className="p-4 border rounded-xl shadow-sm bg-white">
            <h3 className="text-lg font-semibold">{note.title}</h3>
            <p className="text-sm">{note.content}</p>
            <div className="mt-2 flex gap-4">
              <Link to={`/update/${note.id}`} className="text-blue-600 font-medium">Edit</Link>
              <button onClick={() => handleDelete(note.id)} className="text-red-600 font-medium">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notes;
