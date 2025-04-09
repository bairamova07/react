// import "./style.css";
// import Fruit from "./Message";
// //Компонент
// function App() {
//   const username = " Bairamova Gulaida";
//   let age = 17;
//   return (
//     <div>
//       <img
//         src="https://media.istockphoto.com/id/1393750072/vector/flat-white-icon-man-for-web-design-silhouette-flat-illustration-vector-illustration-stock.jpg?s=612x612&w=0&k=20&c=s9hO4SpyvrDIfELozPpiB_WtzQV9KhoMUP9R9gVohoU="
//         alt=""
//       />

// import OrderForm from "./30 week/Day_1/Day_2/OrderForm";

// import GameList from "./30 week/Day_1/Day_2/GameList";

// import Day_1 from "./30 week/Day_1/Day_1";

// import And from "./27 week/And";
// import NumberFilter from "./27 week/Day_3/Numbers";
// import Exam from "./Емтихан/Register";

//       <h1>{username}</h1>
//       <p>Age:{age}</p>
//       {/* <Fruit></Fruit> */}
//       <Fruit name="Apple" />
//     </div>
//   );
// }
// export default App;

// import Movie from "./Movies";
// function App() {
//   return (
//     <div>
//       <Movie name="Venom" year="" zhanr="" time="" image="" />
//     </div>
//   );
// }

// export default App;

// import Productcard from "./ProductCard";

// function App() {
//   return (
//     <div>
//       <Productcard
//         name="Құрма"
//         image="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRMKfSxv8VqCvE_73N8oPSTGPX-4AUDhRB08WatSY6-fyl2WIStdSzIeqIQ2FUEDdQ38qkTU35EYiX5BO_xuEyz0NLPjf8A27pNNig6u3YAdx4zEC89kNeFEYN6xnSP4lbF_Ge_VLwsjg&usqp=CAc"
//         price="1600"
//       />
//       <Productcard
//         name="Финики в шоколаде"
//         image="https://static.tildacdn.pro/tild3966-3065-4461-b132-343833323261/33ED155D-EDBF-4B7A-A.jpeg"
//         price="4000"
//       />
//       <Productcard
//         name="су"
//         image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8dr9BzIt_vTT1WTeMTA1JbtDkpiW1hUarv-DaOT-FoGUJjL2Wm3diKu0O4rJ4QJMNGKY&usqp=CAU"
//         price="300"
//       />
//     </div>
//   );
// }
// export default App;

// function App() {
//   const handleClick = () => {
//     alert("Knopka basyldy");
//   };
//   return (
//     <div>
//       <button onClick={handleClick}>Batyrma</button>
//     </div>
//   );
// }

// export default App;

// function App() {

//   function handleSubmit(event) {
//     event.preventDefault();
//     alert('Knopka basuldy')
//   }

//   return (
//     <form onSubmit={handleSubmit}>

//       <input type='text'/>
//       <button type="submit">Meni bas</button>

//     </form>
//   );
// }

// export default App;

// import Usercard from "./ts";

// function App() {
//   return (
//     <div>
//       <Usercard name="Aigul" age="22" city="Almaty" />
//       <Usercard name="Nurlan" age="28" city="Astana" />
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import Header from "./companents/Header";
// import "../src/style.css";

// export default function App() {
//   return (
//     <div className="image">
//       <Header image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4OuOM165RPvVE82lghJoHS5NRo6KtSO9Dk3mmdiumK8xZ-jiN1GGc9tR6C9HnFfgmSK4&usqp=CAU" />
//     </div>
//   );
// }
// import { useState } from "react";

// export default function App() {
//   let [count, setCount] = useState(23);
//   console.log(setCount);

//   function add() {
//     setCount(count + 1);
//   }
//   function minus() {
//     setCount(count - 1);
//   }
//   function reset() {
//     setCount(count % 1);
//   }
//   function kobeitu() {
//     setCount(count * 2);
//   }
//   function bolu() {
//     setCount(count / 2);
//   }
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={add}>Add</button>
//       <button onClick={minus}>Minus</button>
//       <button onClick={reset}>Reset</button>
//       <button onClick={kobeitu}>Kobeitu</button>
//       <button onClick={bolu}>Bolu</button>
//     </div>
//   );
// }

// import { useState } from "react";

// export default function App() {
//   let users = [
//     { id: 1, name: "Gulaida", age: 17 },
//     { id: 2, name: "Aset", age: 17 },
//     { id: 3, name: "Amir", age: 17 },
//   ];
//   // let names = [
//   //   "Azamat",
//   //   "Kunduz",
//   //   "Gulaida",
//   //   "Nursultan",
//   //   "Erzhas",
//   //   "Taimas",
//   //   "Tolkun",
//   //   "Nurqias",
//   // ];

//   return (
//     <ul>
//       {users.map((user) => (
//         <li key={user.id}>
//           Name:{user.name}
//           Age:{user.age}
//         </li>
//       ))}
//     </ul>
//   );

//   // return (
//   //   <ul>
//   //     {names.map((name) => (
//   //       <li key={name}>{name}</li>
//   //     ))}
//   //   </ul>
//   // );
// }

// import { useState } from "react";
// export default function TextInput() {
//   const [text, setText] = useState("");

//   function change(event) {
//     setText(event.target.value);
//   }
//   return (
//     <div>
//       <input type="text" value={text} onChange={change} />
//       <p>Терілген текст:{text}</p>
//     </div>
//   );
// }

// import { useState } from "react";
// export default function btn() {
//   const [tasls, setTasks] = useState([]);
//   const [task, setTask] = useState("");

//   function add() {}
//   return (
//     <div>
//       <h1>Тапсырмалар тізімі</h1>
// <input type="text"
// value={task}
// onChange={(e)=>setTasks(e.target.value)}
//       <button onChange={addTask}>Qosu</button>
//     </div>
//   );
// }
// import ToggleText from "./27 week/And";

// function App() {
//   return (
//     <div>
//       <ToggleText />
//     </div>
//   );
// }
// export default App;

// export default function App() {
//   const tasks = ["yi jumusun jasay", "react yireny", "Sunup jumusin jasay"];

//   return (
//     <ul>
//       {tasks.map((task, index) => (
//         <li key={index}>{tasks}</li>
//       ))}
//     </ul>
//   );
// }

// export default function App() {
//   const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   const newNumbers = numbers.filter((num) => num >= 5);

//   return (
//     <ul>
//       {newNumbers.map((num, index) => (
//         <li key={index}>{num}</li>
//       ))}
//     </ul>
//   );
// }

// import Numbers from "./27 week/Day_3/Numbers";

// export default function App() {
//   return (
//     <div>
//       <NumberFilter />
//     </div>
//   );
// }
// import TaskFilter from "./27 week/Day_3/TaskFilter";

// export default function App() {
//   return (
//     <li>
//       <TaskFilter />
//     </li>
//   );
// }
// import New from "./27 week/Day_3/New";

// export default function App() {
//   return (
//     <li>
//       <NumbersFilter />
//     </li>
//   );
// }

// import Example from "./27 week/Day_4/Footer";
// export default function App() {
//   return (
//     <li>
//       <Example />
//     </li>
//   );
// }
// import TaskFilter from "./27 week/Day_4/Footer";

// export default function App() {
//   return (
//     <li>
//       <TaskFilter />
//     </li>
//   );
// }

// import Register from "./Емтихан/Register";
// export default function App() {
//   return (
//     <li>
//       <Exam />
//     </li>
//   );
// }
// import Login from "./Емтихан/Login";
// export default function App() {
//   return (
//     <li>
//       <Login />
//     </li>
//   );
// }

// import AppRoute from "./28 week/Day_2/Router";

// export default function App() {
//   return (
//     <li>
//       <AppRoute />
//     </li>
//   );
// }

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   NavLink,
//   useNavigate,
//   Navigate,
// } from "react-router-dom";

// const NavBar = () => {
//   return (
//     <nav>
//       <NavLink
//         to="/profile"
//         className={({ isActive }) => (isActive ? "active" : "")}
//       >
//         My Profile
//       </NavLink>
//       <NavLink
//         to="/projects"
//         className={({ isActive }) => (isActive ? "active" : "")}
//       >
//         My Projects
//       </NavLink>
//       <NavLink
//         to="/about"
//         className={({ isActive }) => (isActive ? "active" : "")}
//       >
//         About Me
//       </NavLink>
//     </nav>
//   );
// };

// const Profile = () => {
//   const navigate = useNavigate();
//   return (
//     <div>
//       <h1>My Profile</h1>
//       <input type="text" placeholder="Enter your name" />
//       <input type="email" placeholder="Enter your email " />
//       <input type="text" placeholder="Enter your academy" />
//       <button onClick={() => navigate("/projects")}>Go to My Projects</button>
//     </div>
//   );
// };

// const Projects = () => {
//   const navigate = useNavigate();
//   return (
//     <div>
//       <h1>My Projects</h1>
//       <ul>
//         <li>
//           <strong>Project 1:</strong> Description of project 1
//         </li>
//         <li>
//           <strong>Project 2:</strong> Description of project 2
//         </li>
//         <li>
//           <strong>Project 3:</strong> Description of project 3
//         </li>
//       </ul>
//       <button onClick={() => navigate("/about")}>Go to About Me</button>
//     </div>
//   );
// };

// const About = () => {
//   const navigate = useNavigate();
//   return (
//     <div>
//       <h1>About Me</h1>
//       <p>Short description about yourself.</p>
//       <button onClick={() => navigate("/profile")}>Go to My Profile</button>
//     </div>
//   );
// };

// const NotFound = () => <Navigate to="/about" replace />;

// const App = () => {
//   return (
//     <Router>
//       <NavBar />
//       <Routes>
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/projects" element={<Projects />} />
//         <Route path="/about" element={<About />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

// import Profile from "./28 week/Day_3/userProfile";

// export default function App() {
//   return (
//     <>
//       <Profile />
//     </>
//   );
// }

// import React from "react";
// import Layout from "./28 week/Day_4/Layout";
// import Protected from "./28 week/Day_4/Protected";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route element={<Home />} />

//           <Route element={<Protected />}>
//             <Route path="/about" element={<Amir_Acc />} />
//             <Route path="/contact" element={<Elnaz_Acc />} />
//           </Route>
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// function Home() {
//   return <h1>Home Page</h1>;
// }e
// function Amir_Acc() {
//   return <h1>Instagram sameone</h1>;
// }
// function Elnaz_Acc() {
//   return <h1>Instagram Elnaz</h1>;
// }

// export default function App() {
//   return (
//     <div>
//       <Day_1 />
//     </div>
//   );
// }
// import WeatherApp from './30 week/Day_2'
// export default function App() {
//   return (
//     <div>
//       <WeatherApp />
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <div>
//       <GameList />
//     </div>
//   );
// }
// export default function App() {
//   return (
//     <div>
//       <OrderForm />
//     </div>
//   );
// }
