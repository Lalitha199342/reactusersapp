import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="panel">
      <p className="eyebrow">REACT ROUTING PROJECT</p>

      <h1>Welcome to User Directory</h1>

      <p>
        Explore our users and view their profiles. This application
        demonstrates navigation between pages using React Router.
      </p>

      <div className="actions">
        <Link to="/users" className="button">
          View Users
        </Link>

        <Link to="/about" className="button button-secondary">
          About the App
        </Link>
      </div>
    </section>
  );
}

export default Home;