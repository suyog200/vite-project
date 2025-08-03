import { useEffect, useState } from "react";
import { fetchJobs } from "../utils/api";
import type { Job } from "../types/types";

export const useJobs = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchJobs().then((data) => {
      setJobs(data);
      setLoading(false);
    });
  }, []);

  return { jobs, loading };
};
