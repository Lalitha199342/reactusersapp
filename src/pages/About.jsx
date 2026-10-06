import { Link } from "react-router-dom";

function About() {
  return (
    <section className="panel">
      <h1>About This Application</h1>

      <p>
        User Directory is a simple React application that displays
        a list of users and their individual profiles.
      </p>

      <p>
        Its purpose is to demonstrate functional components,
        reusable navigation, dynamic routes, and responsive styling.
      </p>

      <Link to="/" className="button">
        Back to Home
      </Link>
    </section>
  );
}

export default About