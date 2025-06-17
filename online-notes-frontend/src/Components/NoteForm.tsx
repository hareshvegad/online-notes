import { useEffect, useState } from "react";
import API from "../utils/axiosInstance";
import { useNavigate, useParams } from "react-router-dom";

const NoteForm = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // For update page
  const [form, setForm] = useState({
    title: "",
    content: "",
    is_public: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const fetchNote = async () => {
    try {
      const res = await API.get(`/api/notes/${id}/`);
      setForm({
        title: res.data.title || "",
        content: res.data.content || "",
        is_public: res.data.is_public || false,
      });
    } catch (err) {
      alert("Error fetching note data.");
      console.error(err);
    }
  };

  useEffect(() => {
    if (id) fetchNote();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    const user = localStorage.getItem("username") || "Haresh";

    if (!token) {
      alert("You must be logged in.");
      return;
    }

    const payload = { ...form, user };

    try {
      if (id) {
        await API.put(`/api/notes/${id}/`, payload);
      } else {
        await API.post("/api/notes/", payload);
      }

      navigate("/notes");
    } catch (err) {
      alert("Error submitting note.");
      console.error(err);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">
        {id ? "Update Note" : "Create Note"}
      </h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-6 rounded-xl shadow"
      >
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <textarea
          name="content"
          placeholder="Content"
          value={form.content}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          rows={4}
          required
        />
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="is_public"
            checked={form.is_public}
            onChange={handleChange}
          />
          Public
        </label>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {id ? "Update" : "Create"}
        </button>
      </form>
    </div>
  );
};

export default NoteForm;
