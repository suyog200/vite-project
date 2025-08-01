
import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <div>
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Current Job Openings
        </h1>
      </div>
      {/* search and filter component */}
      <Header />
      {/* main content */}
    </div>
  );
};

export default Home;
