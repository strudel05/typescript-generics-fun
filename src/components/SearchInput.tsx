import { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";
import { AiOutlineSearch } from "react-icons/ai";

export interface ISearchInputProps {
  searchQuery: string;
  setSearchQuery(query: string): void;
}

export function SearchInput(props: ISearchInputProps) {
  const { searchQuery, setSearchQuery } = props;
  const [query, setQuery] = useState<string>(searchQuery);
  const debouncedQuery = useDebounce(query, 250);

  useEffect(() => {
    setSearchQuery(debouncedQuery);
  }, [debouncedQuery, setSearchQuery]);

  return (
    <div className="form__section form__search">
      <label htmlFor="search" className="form__search--label">
        <span>Search</span> by keywords:
      </label>
      <input
        className="form__search--input"
        value={query}
        type="search"
        id="search"
        placeholder="e.g. programming"
        aria-label="Search"
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
    </div>
  );
}
