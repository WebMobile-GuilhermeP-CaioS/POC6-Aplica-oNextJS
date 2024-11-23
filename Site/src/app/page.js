'use client'

import Image from "next/image";
import styles from "./page.module.css";
import Seat from "../components/Seat/Seat";
import CinemaScreen from "../components/CinemaScreen/CinemaScreen";
import PurchaseButton from "../components/PurchaseButton/PurchaseButton";
import ClickContext from "./globais";
import { useState } from "react";

const seats = require("../../public/filme.json");

export default function Home() {


  const [clickCount, setClickCount] = useState(0);

  const handleIncrement = () => {
      setClickCount((clickCount) => clickCount + 1);
  };

  const handleDecrement = () => {
      setClickCount((clickCount) => clickCount - 1);    
};

  return (
    <ClickContext.Provider value={{ clickCount, handleIncrement, handleDecrement }}>
      <div className="baddybox">
    <div className="cinema">
      <section className="boxsala">
      <section className="boxassentos">
        {seats &&
          seats.assentos.map((seat, index) => {
            return <Seat key={index} numero={seat.numero} status={seat.disponivel}  />
          })}
          
      </section>
      <div className="boxinfossala">
            <p>Tela</p>
            <div className="boxtela"></div>
            <div className="boxlegenda">
              <div className="balllivre"></div>
              <p>livre</p>
              <div className="ballselecionado"></div>
              <p>selecionado</p>
              <div className="ballindisponivel"></div>
              <p>indisponível</p>
            </div>
          </div>
      </section>
      
      <section className="boxinfofilme">
        <CinemaScreen titulo={seats.titulo} sinopse={seats.sinopse} dataLancamento={seats.dataLancamento} direcao={seats.direcao} horario={seats.horario} poster={seats.poster} />
      </section>

      
    </div>
    
    <section className="buttoncomprar">
        <PurchaseButton contador={clickCount} seatPrice={seats.preco} />
      </section>
      </div>
    </ClickContext.Provider>
  );
}