"use client";

import Image from "next/image";
import styles from "./page.module.css";
import CinemaScreen from "../components/CinemaScreen/CinemaScreen";
import PurchaseButton from "../components/PurchaseButton/PurchaseButton";


const seatsData = [
  { status: 'available' },
  { status: 'unavailable' },
  // ... mais assentos
];

const Home = () => {
  return (
    <div>
      <h1>A Forja</h1>
      <CinemaScreen seatsData={seatsData} />
      <PurchaseButton selectedSeats={[]} seatPrice={25.00} />
    </div>
  );
};

export default Home;