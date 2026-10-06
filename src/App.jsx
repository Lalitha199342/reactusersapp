import { Link, Route, Routes } from "react-router-dom";

import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Users from "./pages/Users";
import UserDetail from "./pages/UserDetail";


import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<UserDetail />} />

          <Route
            path="*"
            element={
              <section className="panel">
                <h1>Page Not Found</h1>
                <p>The page you requested does not exist.</p>

                <Link to="/" className="button">
                  Back to Home
                </Link>
              </section>
            }
          />
        </Routes>
      </main>
    </>
  );
}

export default App;