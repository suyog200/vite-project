import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Job } from "../types/types";
import { fetchJobDetails, fetchJobs } from "../utils/api";
import { Building2 } from "lucide-react";
import { MapPinHouse } from "lucide-react";
import { Link } from "react-router-dom";
import SocialMedia from "../components/socialMedia";
import SimilarJobs from "../components/SimilarJobs";

const currentUrl = window.location.href; //getting the current URL for sharing

const JobDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(true);
  const [job, setJob] = useState<Job | null>(null);
  const [allJobs, setAllJobs] = useState<Job[]>([]);

  useEffect(() => {
    const fetchAllJobs = async () => {
      const jobs = await fetchJobs();
      setAllJobs(jobs);
    };
    fetchAllJobs();
  }, []);

  useEffect(() => {
    const getJobDetails = async () => {
      setLoading(true);
      const data = await fetchJobDetails(Number(id));
      setJob(data);
      setLoading(false);
    };

    getJobDetails();
  }, [id]);

  const similarJobs = job
    ? allJobs.filter(
        (j) => j.id !== job.id && j.department?.id === job.department?.id
      )
    : [];

  if (loading)
    return <div className="text-center font-bold text-3xl">Loading...</div>;
  if (!job)
    return (
      <div className="text-center font-bold text-3xl">Oops! Job not found</div>
    );

  return (
    <div className="mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8 w-full">
      <div className="w-full">
        <p className="text-m text-gray-600 mb-2">
          {job.department?.title} Department at Teknorix System Goa
        </p>

        <h1 className="text-3xl font-bold text-gray-900 mb-2">{job.title}</h1>

        <div className="flex flex-wrap gap-1 text-sm text-gray-700 mb-4">
          <span className="px-2 py-1">
            <Building2 className="inline w-4 h-4 mr-1" />
            {job.department?.title}
          </span>
          <span className="px-2 py-1">
            <MapPinHouse className="inline w-4 h-4 mr-1" />
            {job.location.title}, {job.location.state}
          </span>
          <p className="bg-gray-100 px-2 py-1 rounded-md">{job.type}</p>
        </div>

        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-20 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          <a href={job.applyUrl} target="_blank" rel="noopener noreferrer">
            Apply
          </a>
        </button>
      </div>
      <div>
        <button className="text-black py-2 px-4 border rounded-3xl cursor-pointer hover:bg-gray-200">
          <Link to="/">Back</Link>
        </button>
      </div>
      </div>
      {/* ----------------------------------------------------------------------------- */}
      <div className="border-t border-gray-400 mt-4"></div>
      <div className="flex flex-col lg:flex-row gap-8 w-full mt-10">
        {/* Left side: Job details */}
        <div className="lg:w-3/5 w-full">
          <div className="mb-6">
            <div
              className="mt-10 space-y-4 text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: job?.description }}
            />
          </div>
        </div>

        {/* Right side: Similar jobs + Social media */}
        <div className="lg:w-1/3 w-full flex flex-col gap-6">
          {/* Similar jobs */}
          <SimilarJobs similarJobs={similarJobs} />
          {/* Social icons */}
          <SocialMedia currentUrl={currentUrl} job={job} />
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
