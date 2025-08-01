import { useState, useEffect } from "react";
import { fetchDepartments, fetchFunctions, fetchLocations } from "../utils/api";
import Header from "../components/Header";
import Joblist from "../components/Joblist";

const Home = () => {
  const [departments, setDepartments] = useState([]);
  const [functions, setFunctions] = useState([]);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const loadLookups = async () => {
      const [deptData, funcData, locData] = await Promise.all([
        fetchDepartments(),
        fetchFunctions(),
        fetchLocations(),
      ]);
      setDepartments(deptData || []);
      setFunctions(funcData || []);
      setLocations(locData || []);
    };
    loadLookups();
  }, []);

  return (
    <div>
      <div>
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Current Job Openings
        </h1>
      </div>
      {/* search and filter component */}
      <Header departments={departments} functions={functions} locations={locations} />
      {/* main content */}
      <Joblist />
    </div>
  );
};

export default Home;
