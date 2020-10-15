import React, { useEffect, useState } from "react";
import api from "./services/api";

import "./styles.css";

function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    api.get("/repositories").then((response) => {
      const repositories = response.data;
      setRepositories(repositories);
      console.log(repositories);
    });
  }, []);

  async function handleAddRepository() {
    // TODO
  }

  async function handleRemoveRepository(id) {
    // TODO
  }

  return (
    <div>
      <h1>Repositórios:</h1>
      <br />
      <ul data-testid="repository-list">
        {repositories.map((repository) => {
          return (
            <li key={repository.id}>
              {repository.title}
              <button onClick={() => handleRemoveRepository(repository.id)}>
                Remover
              </button>
            </li>
          );
        })}
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
