import type { Filters, Job } from "../types/types";

export const filterJobs = (
  jobs: Job[],
  filters: Filters,
  searchTerm: string
): Job[] => {
  return jobs.filter((job) => {
    const matchesFunction = !filters.function || job.function?.title === filters.function;
    const matchesDepartment = !filters.department || job.department?.title === filters.department;
    const matchesLocation = !filters.location || job.location?.title === filters.location;
    const matchesSearch =
      !searchTerm || job.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFunction && matchesDepartment && matchesLocation && matchesSearch;
  });
};
