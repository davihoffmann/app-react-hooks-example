import React, { useState } from 'react';

function App() {
  const [tech, setTech] = useState(['ReactJS', 'React Native']);
  const [nameTech, setNameTech] = useState('');

  function handleAdd() {
    setTech([...tech, nameTech]);
    setNameTech('');
  }

  return (
    <>
      <ul>
        {tech.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
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
