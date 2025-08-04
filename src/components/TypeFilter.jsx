import { useEffect, useState } from 'react';

export default function TypeFilter({ selectedType, setSelectedType }) {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/type')
      .then(res => res.json())
      .then(data => setTypes(data.results));
  }, []);

  return (
    <div className="text-center my-4">
      <select
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
        className="px-3 py-2 border rounded dark:bg-gray-700 dark:text-white"
      >
        <option value="all">Tous les types</option>
        {types.map((t) => (
          <option key={t.name} value={t.name}>{t.name}</option>
        ))}
      </select>
    </div>
  );
}