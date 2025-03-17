// import { useState } from "react";

// function TaskFilter(){
//     const[tasks,setTasks]=useState([
//         {id:1,text:"React үйрену",completed:false},
//         {id:2,text:"Жаттығу жасау",completed:true},
//         {id:3,text:"Кітап оқу",completed:false},
//     ]);

//     const [filter,setFilter]=useState('all')

//     const handleRemove(id){
//         // filter(tasks.filter((task)=>task.id !==3))
//         setTasks(tasks.filter((task)=>task.id !==id))
//     };

//     const filteredTasks=tasks.filter((task)=>{
//         if(filter==='complete')return task.completed;
//         if(filter==='incomplete')return !task.completed;
//         return true;
//     });

//     return(
//         <div>
//             <h2>Тапсырмалар:</h2>
//             <ul>
//         {filteredTasks.map((task)=>{
//             <li key={task.id}>
//                 {task.text}{task.completed?"✅":"❌"}
//                 <button onClick={{}=>handleRemove(task.id)}>🗑</button>
//             </li>
//         })}
//             </ul>

//         </div>
//     )
// }

import { useState, useEffect } from "react";

function TaskFilter() {
  // Тапсырмалар тізімі
  const [tasks, setTasks] = useState([
    { id: 1, text: "React үйрену", completed: false },
    { id: 2, text: "Жаттығу жасау", completed: true },
    { id: 3, text: "Кітап оқу", completed: false },
  ]);

  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) {
      setTasks(savedTasks); // tasks = savedTasks
    }
  }, []);

  // Тапсырмаларды фильтрлеу
  const filteredTasks = tasks.filter((task) => {
    if (filter === "complete") return task.completed;
    if (filter === "incomplete") return !task.completed;
    return true;
  });

  // 📌 3. useEffect — Тапсырмалар өзгерген сайын localStorage-қа сақтау
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(filteredTasks));
  }, [filteredTasks]);

  // Тапсырманы жою
  function handleRemove(id) {
    // filter = tasks.filter((task) => task.id !== 3)
    setTasks(tasks.filter((task) => task.id !== id));
  }

  // filter = 'incomplete'
  return (
    <div>
      <h2>Тапсырмалар:</h2>
      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id}>
            {task.text} {task.completed ? "✅" : "❌"}
            <button onClick={() => handleRemove(task.id)}>🗑</button>
          </li>
        ))}
      </ul>
      <h3>Фильтр:</h3>
      <button onClick={() => setFilter("all")}>Барлығы</button>
      <button onClick={() => setFilter("complete")}>Аяқталғандар</button>
      <button onClick={() => setFilter("incomplete")}>Аяқталмағандар</button>
    </div>
  );
}

export default TaskFilter;
