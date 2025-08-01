import type { Location, Department, Function } from "../types/types";
import DropdownMenu from "./DropdownMenu";

interface HeaderProps {
  departments: Department[];
  functions: Function[];
  locations: Location[];
}

const Header = ({ departments, functions, locations }: HeaderProps) => {
  return (
    <section className="flex items-center">
      <div className="mx-auto w-full">
        <div className="relative sm:rounded-lg bg-header-bg shadow-md">
          <div className="flex flex-col items-center justify-between p-4 space-y-3 md:flex-row md:space-y-0 md:space-x-4">
            <div className="w-full md:w-1/2">
              <form className="flex items-center">
                <label htmlFor="simple-search" className="sr-only">
                  Search
                </label>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
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
                    className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Search"
                  />
                </div>
              </form>
            </div>
            {/* dropdowns */}
            <div className="flex flex-col items-stretch justify-end flex-shrink-0 w-full space-y-2 md:w-auto md:flex-row md:space-y-0 md:items-center md:space-x-3">
              <div className="flex items-center w-full space-x-3 md:w-auto">
                {/* function  */}
                <DropdownMenu
                  data={functions}
                  dropdownText="Function"
                />

                {/* department */}
                <DropdownMenu
                  data={departments}
                  dropdownText="Department"
                />  

                {/* location */}
                <DropdownMenu
                  data={locations}
                  dropdownText="Location"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;