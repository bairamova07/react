import axios from "axios";
import { useState } from "react";

export default function OrderForm() {
  const [name, setName] = useState("");
  const [order, setOrder] = useState("");
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        title: name,
        body: order,
      })
      .then((res) => {
        setResponse("Тапсырыс қабылданды! ID:" + res.data.id);
      })
      .catch(() => {
        setError("Қате:Тапсырыс жетпеді интернетті тексер!");
        setResponse("");
      });
  };

  return (
    <div>
      <h1>Пиццаға тапсырыс бер!</h1>
      <input
        type="text"
        placeholder="Атыңды жаз..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Қанша пицца керек?"
        value={order}
        onChange={(e) => setOrder(e.target.value)}
      />
      <button>Жіберу</button>
    </div>
  );
}
export default OrderForm;
