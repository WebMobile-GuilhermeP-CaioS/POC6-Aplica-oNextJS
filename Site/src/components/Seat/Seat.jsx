"use client"

import { useState, useContext } from 'react';
import styles from "./Seat.module.css";
import ClickContext from "../../app/globais";

export default function Seat({ numero, status, selecionado }) {
  const [selecionarLocal, setselecionarLocal] = useState(selecionado);
  const { handleIncrement, handleDecrement } = useContext(ClickContext);

  let corbox = "box boxbranco";

  if (status === false) {
    corbox = "box boxcinza";
  } else {
    if (selecionarLocal === true) {
      corbox = "box boxvermelho";
    } else {
      corbox = "box boxbranco";
    }
  }

  const selecionar = () => {
    const novoSelecionarLocal = !selecionarLocal;
setselecionarLocal(novoSelecionarLocal);

if (novoSelecionarLocal) {
  handleIncrement();
} else {
  handleDecrement();
}

  };

  return (
    <section onClick={selecionar} className={corbox}>
      <h1>{numero}</h1>
    </section>
  );
}