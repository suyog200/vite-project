import { useEffect, useState } from "react";
import { fetchJobDetails } from "../utils/api";
import type { Job } from "../types/types";

export const useJobDetails = (id: string | undefined) => {
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    fetchJobDetails(Number(id)).then((data) => {
      setJob(data);
      setLoading(false);
    });
  }, [id]);

  return { job, loading };
};
