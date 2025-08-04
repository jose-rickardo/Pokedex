export default function SearchBar({ search, setSearch }) {
  return (
    <div className="p-4 text-center">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Rechercher un pokémon"
        className="px-4 py-2 border rounded w-80 dark:bg-gray-700 dark:text-white"
      />
    </div>
  );
}