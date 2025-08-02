import { Building2 } from "lucide-react";
import { MapPinHouse } from "lucide-react";
import { Link } from "react-router-dom";
import type { Job } from "../types/types";

const SimilarJobs = ({ similarJobs }: { similarJobs: Job[] }) => {
  return (
    <div className="bg-[#f6f8fb] p-5 rounded-lg shadow-sm">
      <div className="mt-8">
        <h2 className="text-gray-800 font-bold">Other Job Openings</h2>
        <div className="border-b-4 border-blue-300 w-16"></div>
        <div className="space-y-4 mt-2.5">
          {similarJobs.length > 0 ? (
            similarJobs.map((item) => (
              <Link to={`/jobDetails/${item.id}`} key={item.id}>
                <div>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <div className="flex flex-wrap gap-1 text-sm text-gray-700 mb-4">
                    <span className="px-2 py-1">
                      <Building2 className="inline w-4 h-4 mr-1" />
                      {item.department?.title}
                    </span>
                    <span className="px-2 py-1">
                      <MapPinHouse className="inline w-4 h-4 mr-1" />
                      {item.location.title}, {item.location.state}
                    </span>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-sm text-gray-500">
              No similar jobs found in this department.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SimilarJobs;
