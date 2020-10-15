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
    const numberRepository = Date.now();
    const newRepository = {
      title: `Repositório #${numberRepository}`,
      url: `http://github.com/igorluciano/gostack-repositorio-${numberRepository}`,
      techs: ["ReactJS", "NodeJS"],
    };

    api.post("/repositories", newRepository).then((response) => {
      const repository = response.data;
      setRepositories([...repositories, repository]);
    });
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
