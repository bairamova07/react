import { useState } from "react";

export default function NumberFilter() {
  const [numbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  const [filters, setFilters] = useState([]);

  const filterNumbers = () => {
    setFilters(numbers.filter((num) => num % 2 === 0));
  };

  return (
    <div>
      <h2>Сандар:</h2>
      <ul>
        {numbers.map((num) => (
          <li key={num}>{num}</li>
        ))}
      </ul>
      <button onClick={filterNumbers}>Жұп сандарды көрсету</button>
      <h2>Жұп сандар:</h2>
      <ul>
        {filters.map((num) => (
          <li key={num}>{num}</li>
        ))}
      </ul>
    </div>
  );
}
