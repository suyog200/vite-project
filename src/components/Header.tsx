import type { Location, Department, Function } from "../types/types";
import DropdownMenu from "./DropdownMenu";
import type { Filters } from "../types/types";

interface HeaderProps {
  departments: Department[];
  functions: Function[];
  locations: Location[];
  filters: Filters;
  onFilterChange: (key: string, value: string) => void;
}

const Header = ({
  departments,
  functions,
  locations,
  filters,
  onFilterChange,
}: HeaderProps) => {
  return (
    <section className="flex items-center">
      <div className="mx-auto w-full">
        <div className="relative sm:rounded-lg bg-header-bg shadow-md px-4 py-5 space-y-4">
          {/* Search Bar */}
          <form
            className="w-full"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Search"
              />
            </div>
          </form>

          {/* Dropdowns Row */}
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4 justify-evenly">
            <DropdownMenu
              data={functions}
              dropdownText="Function"
              selected={filters.function}
              onSelect={(value) => onFilterChange("function", value)}
            />
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
