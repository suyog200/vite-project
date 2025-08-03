export interface Location {
  id: number;
  title: string;
  city: string;
  state: string;
  country: string;
  zip: string;
};

export interface Department {
  id: number;
  title: string;
}

export interface Function {
  id: number;
  title: string;
}

export interface Job {
  id: number;
  title: string;
  description: string;
  department: {
    id: number;
    title: string;
  } | null;
  function: {
    id: number;
    title: string;
  } | null;
  location: {
    id: number;
    title: string;
    city: string;
    state: string;
    country: string;
    zip: string;
  };
  experience: string;
  type: string;
  salary: string;
  applyUrl: string;
  hostedUrl: string;
  company: string;
  postedDate: string;
}

export interface Filters {
  department: string | null;
  function: string | null;
  location: string | null;
};
