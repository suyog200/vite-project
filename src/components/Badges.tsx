import type { Filters } from "../types/types";

interface BadgesProps {
  filters: Filters;
  handleFilterChange: (key: string, value: string) => void;
  clearAllFilters: () => void;
}

const Badges = ({ filters, handleFilterChange, clearAllFilters }: BadgesProps) => {
  return (
    <div className="flex flex-wrap items-center gap-2 mt-4">
        {Object.entries(filters).map(([key, value]) =>
          value ? (
            <span
              key={key}
              className="flex items-center gap-1 bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
            >
              {key}:{value}
              <button
                onClick={() => handleFilterChange(key, "")}
                className="ml-2 text-gray-500 hover:text-red-500"
              >
                ✕
              </button>
            </span>
          ) : null
        )}

        {filters && (
          Object.values(filters).some((val) => val != "" &&val !== null) && (
            <button
              onClick={clearAllFilters}
              className="ml-4 text-sm text-purple-600 hover:underline"
            >
            Clear All
          </button>
        ))}
      </div>
  )
}

export default Badges
