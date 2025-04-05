import axios from "axios";
import { useEffect, useState } from "react";

const WeatherApp = () => {
  const [weather, setWeather] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://api.example.com/weather")
      .then((response) => {
        setWeather(response.data);
        setError("");
      })
      .catch(() => {
        setError("Internet katip kaldy");
      });
  }, []);

  return (
    <div>
      {error ? <p>{error}</p> : <p>Aua-rayi:{weather || "Juktelude...."}</p>}
    </div>
  );
};
export default WeatherApp; 