import { useEffect, useState } from "react";
import type { Department, Function, Job, Location } from "../types/types";
import { fetchDepartments, fetchFunctions, fetchJobs, fetchLocations } from "../utils/api";

export const useJobFilters = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [departments, setDepartments] = useState<Department[]>([]);
  const [functions, setFunctions] = useState<Function[]>([]);
  const [locations, setLocations] = useState<Location[]>([]);

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

  return { jobs, departments, functions, locations };
};
