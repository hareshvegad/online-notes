import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-blue-600 text-white px-4 py-3 flex justify-between">
      <Link to="/notes" className="font-bold text-lg">Online Notes</Link>
      <div className="space-x-4">
        {token ? (
          <>
            <Link to="/create">Create</Link>
            <button onClick={handleLogout} className="text-white">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
