import Navbar from "./navbar";

const Wrapper = ({ children }) => {
  return (
    <div className="h-screen bg-slate-200 md:px-[40px]">
      <div className="max-w-7xl mx-auto">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Wrapper;
