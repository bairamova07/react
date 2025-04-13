import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FlightContext } from "./FlightContext";

function FlightBooking() {
  const { flightId } = useParams();
  const navigate = useNavigate();
  const { flights, setBooking } = useContext(FlightContext);

  const [flight, setFlight] = useState(null);
  const [formData, setFormData] = useState({
    passengerName: "",
    selectedDate: "",
  });
  const [loading, setLoading] = useState(true);

  const fetchFlightDetails = () => {
    const selectedFlight = flights.find((f) => f.id === parseInt(flightId));
    setFlight(selectedFlight);
    setLoading(false);
  };

  useEffect(() => {
    if (flights.length > 0) {
      fetchFlightDetails();
    }
  }, [flights, flightId]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBooking = async (e) => {
    e.preventDefault();
    if (!formData.passengerName || !formData.selectedDate) {
      alert("Барлық өрістерді толтырыңыз!");
      return;
    }

    try {
      const bookingData = {
        flightId: flight.id,
        ...formData,
        bookingDate: new Date().toISOString(),
      };

      setBooking((prev) => [...prev, bookingData]);
      alert("Брондау сәтті жасалды!");
      navigate("/");
    } catch (error) {
      console.error("Booking error:", error);
      alert("Брондау кезінде қате кетті");
    }
  };

  if (loading) return <div className="loading">Жүктелуде...</div>;
  if (!flight) return <div className="loading">Ұшақ табылмады.</div>;

  return (
    <div className="container">
      <h1>Ұшақ Брондауы</h1>
      <form onSubmit={handleBooking}>
        <div>
          <label>Аты-жөніңіз:</label>
          <input
            type="text"
            name="passengerName"
            value={formData.passengerName}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Сапар күні:</label>
          <input
            type="date"
            name="selectedDate"
            value={formData.selectedDate}
            onChange={handleChange}
          />
        </div>

        <div>
          <button type="submit">Брондау</button>
        </div>
      </form>

      <div className="flight-info">
        <h3>
          {flight.from} ✈️ {flight.to}
        </h3>
        <p>Уақыты: {flight.time}</p>
        <p>Авиакомпания: {flight.airline}</p>
        <p>Қалған орындар: {flight.seats}</p>
        <p>Бағасы: {flight.price.toLocaleString()} ₸</p>
      </div>
    </div>
  );
}

export default FlightBooking;
