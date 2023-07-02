import { createContext, useState } from "react";
import { defaultFilters } from "../hooks/useProductsList";

export const FiltersContext = createContext();

export function filtersProvider({ children }) {
  const [filters, setFilters] = useState(defaultFilters);

  return (
    <FiltersContext.Provider
      value={{
        filters,
        setFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
}

export default filtersProvider;
