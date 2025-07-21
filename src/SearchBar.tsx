import React from "react";

interface Props {
  search: string;
  setSearch: (val: string) => void;
}

export default function SearchBar({ search, setSearch }: Props) {
  return (
    <input
      type="text"
      placeholder="Search issues..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      style={{ margin: "1rem", padding: "0.5rem", width: "50%" }}
    />
  );
}
