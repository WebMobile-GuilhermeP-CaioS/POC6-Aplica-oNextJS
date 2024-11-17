import React from 'react';

const Seat = ({ status, onClick }) => {
  const seatClass = status === 'available' ? 'seat-available' : 'seat-unavailable';
  return <div className={`seat ${seatClass}`} onClick={onClick}></div>;
};

export default Seat;