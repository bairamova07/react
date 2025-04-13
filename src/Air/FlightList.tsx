import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FlightContext } from "./FlightContext";

function FlightList() {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const { flights, setFlights } = useContext(FlightContext);
  const navigate = useNavigate();

  const mockFlights = [
    {
      id: 1,
      from: "Almaty",
      to: "Astana",
      price: 25000,
      time: "10:00",
      airline: "Air Astana",
      seats: 50,
    },
    {
      id: 2,
      from: "Almaty",
      to: "Shymkent",
      price: 30000,
      time: "14:00",
      airline: "SCAT",
      seats: 27,
    },
    {
      id: 3,
      from: "Almaty",
      to: "Qaragandy",
      price: 28000,
      time: "22:00",
      airline: "Qazaq Air",
      seats: 60,
    },
  ];

  useEffect(() => {
    fetchFlights();
  }, []);

  const fetchFlights = () => {
    setTimeout(() => {
      setFlights(mockFlights);
      setLoading(false);
    }, 1000);
  };

  const filteredFlights = flights.filter(
    (flight) =>
      flight.from.toLowerCase().includes(searchTerm.toLowerCase()) ||
      flight.to.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <div className="loading">Жүктелуде...</div>;

  return (
    <div className="container">
      <h1 className="title">Ұшақ рейстері</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Қайдан немесе қайда іздеу"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="flight-list">
        {filteredFlights.map((flight) => (
          <div key={flight.id} className="flight-card">
            <div className="flight-info">
              <h3>
                {flight.from} ✈️ {flight.to}
              </h3>
              <p>Уақыты: {flight.time}</p>
              <p>Авиакомпания: {flight.airline}</p>
              <p>Қалған орын: {flight.seats}</p>
            </div>
            <div className="flight-price">
              <span>{flight.price.toLocaleString()} ₸</span>
              <button
                onClick={() => navigate(`/booking/${flight.id}`)}
                disabled={flight.seats === 0}
              >
                {flight.seats === 0 ? "Орын жоқ" : "Брондау"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FlightList;
