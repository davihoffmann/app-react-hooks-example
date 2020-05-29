import React, { useState, useEffect, useMemo } from 'react';

function App() {
  const [tech, setTech] = useState([]);
  const [nameTech, setNameTech] = useState('');

  function handleAdd() {
    setTech([...tech, nameTech]);
    setNameTech('');
  }

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
