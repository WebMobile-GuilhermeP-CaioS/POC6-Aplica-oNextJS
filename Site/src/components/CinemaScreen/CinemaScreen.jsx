"use client"

//import styles from "./book.module.css"

export default function CinemaScreen({ titulo, sinopse, dataLancamento, direcao, horario, poster }) {

  return (
    <section>
      <div className="boxpostetitulo">
        <img src={poster} />
        <div className="boxtitulohorario">
          <h1>{titulo}</h1>
          <h2>{horario}</h2>
        </div>
      </div>
      
      <div className="boxmaisinfos">
      <p><b>Sinopse do filme</b></p>
      <p>{sinopse}</p>

      <p><b>Data de lançamento</b></p>
      <p>{dataLancamento}</p>

      <p><b>Direção</b></p>
      <p>{direcao}</p>
      </div>
      
    </section>
  )
}