# POC6-Aplica-oNextJS
POC 6 - Aplicação NextJS

## Alunos:

* Caio Sampaio. RA: 10391053;
* Guilherme Picoli. RA: 10389843;
* Caio Filardi. RA: 10341128.

## POC 6

### **Criação do Projeto NextJS 14**:

Inicialmente, criaremos o projeto em NextJS 14 com o comando `npx create-next-app@latest POC-6-Aplicacao---NextJS`. Em seguida, escolheremos as seguintes configurações de projeto:

- Would you like to use TypeScript? ... **No**
- Would you like to use ESLint? ... **Yes**
- Would you like to use Tailwind CSS? ... **No**
- Would you like your code inside a `src/` directory? ... **Yes**
- Would you like to use App Router? (recommended) ... **Yes**
- Would you like to use Turbopack for next dev? ... **No**
- Would you like to customize the import alias (@/* by default)? ... **No**


### Visão Geral
Este projeto é uma prova de conceito para um sistema de reserva de assentos em um cinema. Ele permite que os usuários visualizem a disposição dos assentos, selecionem os assentos desejados e realizem a compra dos mesmos. O projeto é construído utilizando React e Next.js, e faz uso de componentes para representar assentos, tela do cinema e botão de compra.

### Funcionalidades

Visualização de Assentos: Mostra a disposição dos assentos disponíveis, selecionados e indisponíveis.
Seleção de Assentos: Permite que o usuário selecione ou desmarque assentos, alterando seu estado visual.
Informações do Filme: Exibe detalhes do filme, como título, sinopse, data de lançamento, direção e horário.
Compra de Ingressos: Calcula o preço total com base nos assentos selecionados e permite a compra.

### Estrutura do Projeto
Home Component: Componente principal que gerencia o estado dos cliques (assentos selecionados) e fornece o contexto para os componentes filhos.
Seat Component: Representa cada assento, permitindo a seleção e desmarcação, alterando a cor conforme o estado.
CinemaScreen Component: Exibe informações detalhadas sobre o filme em exibição.
PurchaseButton Component: Botão que calcula o preço total dos assentos selecionados e simula a compra.

### Como Executar o Projeto
Clone o Repositório: Clone este repositório em sua máquina local.
Instale as Dependências: Navegue até o diretório do projeto e execute npm install para instalar todas as dependências necessárias.
Inicie o Servidor: Execute npm run dev para iniciar o servidor de desenvolvimento.
Acesse o Projeto: Abra o navegador e acesse http://localhost:3000 para visualizar o projeto em execução.

### Trechos de Codigo

### Componente Principal (`Home`)

Este componente gerencia o estado dos cliques e fornece o contexto para os componentes filhos.
```
import { useState } from "react"; import ClickContext from "./globais";

export default function Home() { const [clickCount, setClickCount] = useState(0);

const handleIncrement = () => { setClickCount((clickCount) => clickCount + 1); };

const handleDecrement = () => { setClickCount((clickCount) => clickCount - 1); };

return ( <ClickContext.Provider value={{ clickCount, handleIncrement, handleDecrement }}> {/* Outros componentes aqui */} </ClickContext.Provider> ); }
```

### Componente de Assento (`Seat`)

Este componente representa cada assento e permite a seleção e desmarcação, alterando a cor conforme o estado.

```
import { useState, useContext } from 'react'; import ClickContext from "../../app/globais";

export default function Seat({ numero, status }) { const [selecionarLocal, setselecionarLocal] = useState(false); const { handleIncrement, handleDecrement } = useContext(ClickContext);

const selecionar = () => { const novoSelecionarLocal = !selecionarLocal; setselecionarLocal(novoSelecionarLocal);

if (novoSelecionarLocal) {
  handleIncrement();
} else {
  handleDecrement();
}
};

return ( <section onClick={selecionar} className={box ${status ? (selecionarLocal ? 'boxvermelho' : 'boxbranco') : 'boxcinza'}}> <h1>{numero}</h1> </section> ); }
```

### Componente de Tela do Cinema (`CinemaScreen`)

Exibe informações detalhadas sobre o filme em exibição.

```
export default function CinemaScreen({ titulo, sinopse, dataLancamento, direcao, horario, poster }) { return ( <section> <div className="boxpostetitulo"> <img src={poster} alt="Poster do Filme" /> <div className="boxtitulohorario"> <h1>{titulo}</h1> <h2>{horario}</h2> </div> </div> <div className="boxmaisinfos"> <p><b>Sinopse do filme</b></p> <p>{sinopse}</p> <p><b>Data de lançamento</b></p> <p>{dataLancamento}</p> <p><b>Direção</b></p> <p>{direcao}</p> </div> </section> ); }
```

### Componente de Botão de Compra (`PurchaseButton`)

Calcula o preço total dos assentos selecionados e simula a compra.

```
 import React, { useContext } from 'react'; import ClickContext from "../../app/globais";

export default function PurchaseButton({ seatPrice }) { const { clickCount } = useContext(ClickContext); const totalPrice = clickCount * seatPrice;

const handlePurchase = () => { alert('Compra realizada com sucesso'); };

return ( <button onClick={handlePurchase}> Comprar R$ {totalPrice.toFixed(2)} </button> ); }
```

### Resultados

![image](https://github.com/user-attachments/assets/728b705f-5466-48dc-b8d9-90761fd3ee33)  

![image](https://github.com/user-attachments/assets/b0528231-a153-4a98-9588-871e3ef35e5c)  

![image](https://github.com/user-attachments/assets/2504b2fc-f5c0-49a2-a068-d54cfe635e40)  

![image](https://github.com/user-attachments/assets/d278599a-fbb8-4c0d-93b5-3de827e8c536)  

![image](https://github.com/user-attachments/assets/1f6f97d2-0b6e-4652-b512-248ff856553a)  




