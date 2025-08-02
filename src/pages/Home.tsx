import { useState, useEffect } from "react";
import {
  fetchDepartments,
  fetchFunctions,
  fetchLocations,
  fetchJobs,
} from "../utils/api";
import Header from "../components/Header";
import Joblist from "../components/Joblist";
import type {
  Job,
  Department,
  Function,
  Location,
  Filters,
} from "../types/types";
import Badges from "../components/Badges";

const Home = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [departments, setDepartments] = useState<Department[]>([]);
  const [functions, setFunctions] = useState<Function[]>([]);
  const [locations, setLocations] = useState<Location[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filters, setFilters] = useState<Filters>(() => {
    const stored = localStorage.getItem("filters");
    return stored
      ? JSON.parse(stored)
      : { function: "", department: "", location: "" };
  });

  useEffect(() => {
    const fetchAll = async () => {
      const [jobsData, departmentsData, functionsData, locationsData] =
        await Promise.all([
          fetchJobs(),
          fetchDepartments(),
          fetchFunctions(),
          fetchLocations(),
        ]);
      setJobs(jobsData || []);
      setDepartments(departmentsData || []);
      setFunctions(functionsData || []);
      setLocations(locationsData || []);
    };
    fetchAll();
  }, []);

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

    const filteredJobs = jobs.filter((job) => {
    const matchesFunction = !filters.function || job.function?.title === filters.function;
    const matchesDepartment = !filters.department || job.department?.title === filters.department;
    const matchesLocation = !filters.location || job.location?.title === filters.location;

      const matchesSearch =
    !searchTerm ||
    job.title.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesFunction && matchesDepartment && matchesLocation && matchesSearch;
  });

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
