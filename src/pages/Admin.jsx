import UsersTable from "../components/UsersTable";
import { useAuth } from "../context/AuthContext";
import Profile from "./Profile";
import "../styles/auth.css";

export default function Admin() {
  const { users } = useAuth();

  return (
    <div className="page grid">
      <UsersTable users={users} />
      <Profile />
    </div>
  );
}