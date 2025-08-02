import type { Location, Department, Function } from "../types/types";
import DropdownMenu from "./DropdownMenu";
import type { Filters } from "../types/types";
import SearchBar from "./SearchBar";

interface HeaderProps {
  departments: Department[];
  functions: Function[];
  locations: Location[];
  filters: Filters;
  onFilterChange: (key: string, value: string) => void;
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

const Header = ({
  departments,
  functions,
  locations,
  filters,
  onFilterChange,
  searchTerm,
  onSearchChange,
}: HeaderProps) => {
  return (
    <section className="flex items-center">
      <div className="mx-auto w-full">
        <div className="relative sm:rounded-lg bg-header-bg shadow-md px-4 py-5 space-y-4">
          {/* Search Bar */}
          <SearchBar searchTerm={searchTerm} onSearchChange={onSearchChange} />

          {/* Dropdowns Row */}
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4 justify-evenly">
            <DropdownMenu
              data={departments}
              dropdownText="Department"
              selected={filters.department}
              onSelect={(value) => onFilterChange("department", value)}
            />
            <DropdownMenu
              data={locations}
              dropdownText="Location"
              selected={filters.location}
              onSelect={(value) => onFilterChange("location", value)}
            />
            <DropdownMenu
              data={functions}
              dropdownText="Function"
              selected={filters.function}
              onSelect={(value) => onFilterChange("function", value)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
