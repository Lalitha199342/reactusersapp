import { useNavigate, useParams } from "react-router-dom";
import { users } from "../data/users";

function UserDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const user = users.find((user) => String(user.id) === id);

  if (!user) {
    return (
      <section className="panel">
        <h1>User Not Found</h1>
        <p>No user exists with this ID.</p>

        <button
          type="button"
          className="button"
          onClick={() => navigate("/users")}
        >
          Go Back
        </button>
      </section>
    );
  }

  return (
    <section className="panel">
      <div className="avatar" aria-hidden="true">
        {user.name.charAt(0)}
      </div>

      <h1>{user.name}</h1>

      <dl className="user-details">
        <div>
          <dt>User ID</dt>
          <dd>{user.id}</dd>
        </div>

        <div>
          <dt>Email</dt>
          <dd>
            <a href={`mailto:${user.email}`}>
              {user.email}
            </a>
          </dd>
        </div>

        <div>
          <dt>Role</dt>
          <dd>{user.role}</dd>
        </div>

        <div>
          <dt>City</dt>
          <dd>{user.city}</dd>
        </div>
      </dl>

      <button
        type="button"
        className="button"
        onClick={() => navigate("/users")}
      >
        Go Back
      </button>
    </section>
  );
}

export default UserDetail;