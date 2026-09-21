import { useState } from "react";

function Lista() {
  const [itens, setItens] = useState([
    { id: 1, nome: "Aprender React" },
    { id: 2, nome: "Praticar useState" },
    { id: 3, nome: "Estudar React Router" },
  ]);

  function adicionarItem() {
    const novoItem = {
      id: Date.now(),
      nome: `Novo item ${itens.length + 1}`,
    };

    setItens([...itens, novoItem]);
  }

  function removerItem(id) {
    setItens(itens.filter((item) => item.id !== id));
  }

  return (
    <main className="main">
      <h2>Minha Lista</h2>

      <button onClick={adicionarItem}>
        Adicionar item
      </button>

      <ul className="lista">
        {itens.map((item) => (
          <li key={item.id}>
            <span>{item.nome}</span>

            <button onClick={() => removerItem(item.id)}>
              Remover
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Lista;