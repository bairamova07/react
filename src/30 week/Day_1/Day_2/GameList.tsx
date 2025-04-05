import React, { useState, useEffect } from "react";
import axios from "axios";

function GameList() {
  const [games, setGames] = useState([]); // Ойындар тізімін сақтайтын қорап

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts") // API-дан деректер сұрау
      .then((response) => {
        setGames(response.data.slice(0, 5)); // Алғашқы 5 ойынды ғана аламыз
      });
  }, []);

  return (
    <div>
      <h1>Менің сүйікті ойындарым</h1>
      {games.length === 0 ? (
        <p>Жүктелуде...</p>
      ) : (
        <ul>
          {games.map((game) => (
            <li key={game.id}>{game.title}</li> // Ойын атын көрсету
          ))}
        </ul>
      )}
    </div>
  );
}

export default GameList;
