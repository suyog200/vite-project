import type { Job } from "../types/types";
import { Building2 } from "lucide-react";
import { MapPinHouse } from 'lucide-react';

interface JoblistProps {
  jobs: Job[];
}
const Joblist = ({ jobs }: JoblistProps) => {

    const groupedJobs = jobs.reduce((acc: { [key: string]: Job[] }, job) => {
    const dept = job.department?.title || "Uncategorized";
    if (!acc[dept]) acc[dept] = [];
    acc[dept].push(job);
    return acc;
  }, {});

  return (
    <div className="p-6 space-y-8">
      {Object.entries(groupedJobs).map(([dept, deptJobs]) => (
        <div key={dept}>
          <h2 className="text-2xl font-bold text-gray-700 pb-2 mb-4 border-b-4 border-blue-300 w-[60px]">
            {dept}
          </h2>

          <div className="space-y-5">
            {deptJobs.map((job) => (
              <div
                key={job.id}
                className="w-full bg-white px-6 py-4 flex justify-between items-center"
              >
                {/* Job Info */}
                <div>
                  <h3 className="text-xl font-bold text-gray-600 mb-1">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
                    <Building2 className="w-4 h-4" />
                    <span>{job.function?.title || "Function N/A"}</span>
                    <MapPinHouse className="w-4 h-4" />
                    <span>{job.location?.title || "Location N/A"}</span>
                    <span className="bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full text-xs">
                      {job.type || "Full Time"}
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={job.applyUrl}
                    target="_blank"
                    className=" text-blue-400 px-4 py-1.5 rounded-4xl text-sm border border-blue-400"
                  >
                    Apply
                  </a>
                  <a
                    href={`/jobDetails/${job.id}`}
                    className="text-black px-4 py-1.5 "
                  >
                    View
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Joblist;
