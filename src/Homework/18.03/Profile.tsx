import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  useNavigate,
  Navigate,
} from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <NavLink
        to="/profile"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        My Profile
      </NavLink>
      <NavLink
        to="/projects"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        My Projects
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        About Me
      </NavLink>
    </nav>
  );
};

const Profile = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>My Profile</h1>
      <p>Name: Your Name</p>
      <p>Email: your.email@example.com</p>
      <p>Academy: Your Academy</p>
      <button onClick={() => navigate("/projects")}>Go to My Projects</button>
    </div>
  );
};

const Projects = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>My Projects</h1>
      <ul>
        <li>
          <strong>Project 1:</strong> Description of project 1
        </li>
        <li>
          <strong>Project 2:</strong> Description of project 2
        </li>
        <li>
          <strong>Project 3:</strong> Description of project 3
        </li>
      </ul>
      <button onClick={() => navigate("/about")}>Go to About Me</button>
    </div>
  );
};

const About = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>About Me</h1>
      <p>Short description about yourself.</p>
      <button onClick={() => navigate("/profile")}>Go to My Profile</button>
    </div>
  );
};

const NotFound = () => <Navigate to="/about" replace />;

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
