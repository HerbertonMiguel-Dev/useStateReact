import React, { useState } from 'react'; // Importa React e o hook useState

function App() {
  // Define o estado inicial com uma lista de tarefas e uma string vazia para o input
  const [tarefas, setTarefas] = useState([ // Hook useState para gerenciar o estado da lista de tarefas
    'Pagar a conta de luz', // Tarefa inicial
    'Estudar React Hooks'   // Tarefa inicial
  ]);

  const [input, setInput] = useState(''); // Hook useState para gerenciar o estado do input (inicialmente vazio)

  // Função para adicionar uma nova tarefa à lista
  function handleAdd() {
    setTarefas([...tarefas, input]); // Atualiza o estado de tarefas adicionando a nova tarefa do input
    setInput(''); // Limpa o campo de input após adicionar a tarefa
  }

  return (
    <div> {/* Container principal */}
      <ul> {/* Lista de tarefas */}
        {tarefas.map(tarefa => ( // Mapeia cada tarefa para um item de lista
          <li key={tarefa}>{tarefa}</li> // Cada tarefa é exibida como um item de lista (li)
        ))}
      </ul>

      {/* Campo de input para adicionar novas tarefas */}
      <input 
        type="text" 
        value={input} // O valor do input é controlado pelo estado
        onChange={e => setInput(e.target.value)} // Atualiza o estado do input conforme o usuário digita
      />

      {/* Botão para adicionar a nova tarefa */}
      <button type="button" onClick={handleAdd}>Adicionar</button>
    </div>
  );
}

export default App; // Exporta o componente App como padrão para uso em outros arquivos
