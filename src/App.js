import React, { useState, useEffect, useMemo, useCallback } from 'react';

/**
 * useState    -> criar variaveis de estado
 * useEffect   -> para controlar o ciclo de vida dos components
 * useMemo     -> para ouvir a alteração de apenas uma variavel do estudo e retornar um unico valor
 * useCallback -> mesma coisa que o useMemo porem utilizado para funções
 */

function App() {
  const [tech, setTech] = useState([]);
  const [nameTech, setNameTech] = useState('');

  const handleAdd = useCallback(() => {
    setTech([...tech, nameTech]);
    setNameTech('');
  }, [nameTech, tech]);

  useEffect(() => {
    const techs = localStorage.getItem('tech');

    if (techs) {
      setTech(JSON.parse(techs));
    }

    // Did unmount
    // return () => {};
  }, []);

  useEffect(() => {
    localStorage.setItem('tech', JSON.stringify(tech));
  }, [tech]);

  const techSize = useMemo(() => tech.length, [tech]);

  return (
    <>
      <ul>
        {tech.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <strong>Você tem {techSize} tecnologias.</strong>
      <br />
      <input
        type="text"
        value={nameTech}
        onChange={(e) => setNameTech(e.target.value)}
      />
      <button type="button" onClick={handleAdd}>
        Adicionar
      </button>
    </>
  );
}

export default App;
