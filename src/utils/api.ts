const BASE_URL = "https://demo.jobsoid.com/api/v1";


export const fetchDepartments = async () => {
  try {
    const res = await fetch(`${BASE_URL}/departments`);
    if (!res.ok) throw new Error("Failed to fetch departments");
    return res.json();
  } catch (error) {
    console.error("Departments API Error:", error);
    return null;
  }
};

export const fetchFunctions = async () => {
  try {
    const res = await fetch(`${BASE_URL}/functions`);
    if (!res.ok) throw new Error("Failed to fetch functions");
    return res.json();
  } catch (error) {
    console.error("Functions API Error:", error);
    return null;
  }
};

export const fetchLocations = async () => {
  try {
    const res = await fetch(`${BASE_URL}/locations`);
    if (!res.ok) throw new Error("Failed to fetch locations");
    return res.json();
  } catch (error) {
    console.error("Locations API Error:", error);
    return null;
  }
};