// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   useParams,
//   useNavigate,
// } from "react-router-dom";

// export default function Profile() {
//   <div>
//     <Router>
//       <Route path="/" element={<UserList />} />
//       <Route path="/user/:id" element={<UserProfile />} />
//     </Router>
//   </div>;
// }

// function UserList() {
//   const users = [
//     { id: 1, name: "Elnaz", post: "" },
//     { id: 2, name: "Amir" },
//     { id: 3, name: "Nazar" },
//   ];

//   return (
//     <div>
//       <h1>User List</h1>
//       {users.map((user) => (
//         <p key={user.id}>
//           {user.id}-<Link to={`/user/${user.id}`}>View Profile</Link>
//         </p>
//       ))}
//     </div>
//   );
// }

// function UserProfile() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   return (
//     <div>
//       <h1>User Profile{id}</h1>
//       <button onClick={() => navigate("/")}>Back to Users</button>
//     </div>
//   );
// }
import {
  BrowserRouter as Router,
  Route,
  Link,
  useParams,
  useNavigate,
} from "react-router-dom";
import Home from "./Home";
import Posts from "./Posts";

export default function Profile() {
  <div>
    <Router>
      <Route path="/" element={<Home />} />
      <Route path="/posts" element={<Posts />} />
    </Router>
  </div>;
}

function UserList() {
  const users = [
    { id: 1, name: "Elnaz", post: "" },
    { id: 2, name: "Amir" },
    { id: 3, name: "Nazar" },
  ];

  return (
    <div>
      <h1>User List</h1>
      {users.map((user) => (
        <p key={user.id}>
          {user.id}-<Link to={`/user/${user.id}`}>View Profile</Link>
        </p>
      ))}
    </div>
  );
}

function UserProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <div>
      <h1>User Profile{id}</h1>
      <button onClick={() => navigate("/")}>Back to Users</button>
    </div>
  );
}
