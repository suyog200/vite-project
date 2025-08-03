import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import JobDetails from "./pages/JobDetails"


function App() {

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-24 py-8">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobDetails/:id" element={<JobDetails />} />
      </Routes>
    </div>
  )
}

export default App
