import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";

export default function AppRoute() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/next-video" element={<NextVideo />} />
      </Routes>
    </Router>
  );
}
function NextVideo() {
  return <h1>You Tube</h1>;
}

function NavBar() {
  return (
    <nav>
      <Link to="/about">Home</Link>
      {"      |      "}
      <Link to="https://booknookkz.com/">About</Link> {"      |      "}
      <Link to="/">Contact</Link> {"      |      "}
      <a href="/" target="blank">
        Ted
      </a>{" "}
      {"      |      "}
    </nav>
  );
}

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Home Page</h1>

      <button onClick={() => navigate("/next-video")}> You Tube</button>
    </div>
  );
}

function About() {
  return <h1>About us</h1>;
}

function Contact() {
  return <h1>Contact us</h1>;
}

function NotFound() {
  return <h1>Not Found</h1>;
}
