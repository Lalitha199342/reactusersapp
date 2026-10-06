import { Link } from "react-router-dom";
import { users } from "../data/users";

function Users() {
  return (
    <section>
      <h1>Our Users</h1>
      <p>Select a user to view their profile.</p>

      <ul className="users-grid">
        {users.map((user) => (
          <li key={user.id} className="user-card">
            <div className="avatar" aria-hidden="true">
              {user.name.charAt(0)}
            </div>

            <h2>{user.name}</h2>
            <p className="email">{user.email}</p>
            <p>{user.role}</p>

            <Link
              to={`/users/${user.id}`}
              className="button"
              aria-label={`View profile of ${user.name}`}
            >
              View Profile
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Users;