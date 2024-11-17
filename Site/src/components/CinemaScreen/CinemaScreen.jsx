"use client";
import Seat from '../Seat/Seat';

const CinemaScreen = ({ seatsData }) => {
    const [selectedSeats, setSelectedSeats] = useState([]);
  
    const handleSeatClick = (index) => {
      if (seatsData[index].status === 'available') {
        setSelectedSeats([...selectedSeats, index]);
      }
    };
  
    return (
      <div className="cinema-screen">
        {seatsData.map((seat, index) => (
          <Seat key={index} status={seat.status} onClick={() => handleSeatClick(index)} />
        ))}
      </div>
    );
  };
  
  export default CinemaScreen;