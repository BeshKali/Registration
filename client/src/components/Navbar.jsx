import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import LogoutButton from "./LogoutButton";

export default function Navbar() {
  const { user } = useAuth();

  return (
    <nav className="bg-white shadow p-4 flex justify-between">
      <div className="space-x-4">
        <Link to="/dashboard" className="text-blue-600">Dashboard</Link>
      </div>
      <div>
        {user ? (
          <LogoutButton />
        ) : (
          <Link to="/login" className="text-blue-600">Login</Link>
        )}
      </div>
    </nav>
  );
}
