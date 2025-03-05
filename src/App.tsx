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

import Usercard from "./ts";

function App() {
  return (
    <div>
      <Usercard name="Aigul" age="22" city="Almaty" />
      <Usercard name="Nurlan" age="28" city="Astana" />
    </div>
  );
}

export default App;
