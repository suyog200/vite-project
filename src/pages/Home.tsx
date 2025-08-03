import { useState } from "react";
import Header from "../components/Header";
import Joblist from "../components/Joblist";
import Badges from "../components/Badges";
import { useJobFilters } from "../hooks/useJobFilters";
import type { Filters } from "../types/types";
import { filterJobs } from "../utils/filterJobs";

const Home = () => {
  const { jobs, departments, functions, locations } = useJobFilters();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filters, setFilters] = useState<Filters>(() => {
    const stored = localStorage.getItem("filters");
    return stored
      ? JSON.parse(stored)
      : { function: "", department: "", location: "" };
  });

  const handleFilterChange = (key: string, value: string) => {
    const updated = { ...filters, [key]: value };
    setFilters(updated);
    localStorage.setItem("filters", JSON.stringify(updated));
  };

  const clearAllFilters = () => {
    const cleared = { function: "", department: "", location: "" };
    setFilters(cleared);
    localStorage.setItem("filters", JSON.stringify(cleared));
  };

  const filteredJobs = filterJobs(jobs, filters, searchTerm);

  return (
    <div>
      <div>
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Current Job Openings
        </h1>
      </div>
      {/* search and filter component */}
      <Header
        departments={departments}
        functions={functions}
        locations={locations}
        filters={filters}
        onFilterChange={handleFilterChange}
        searchTerm={searchTerm}
        onSearchChange= {(value) => setSearchTerm(value)}
      />
      {/* badges for active filters */}
      <Badges
        filters={filters}
        handleFilterChange={handleFilterChange}
        clearAllFilters={clearAllFilters}
      />
      {/* main content */}
      <Joblist jobs={filteredJobs} />
    </div>
  );
};

export default Home;
