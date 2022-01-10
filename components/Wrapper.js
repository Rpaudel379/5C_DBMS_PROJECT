import Navbar from "./navbar";

const Wrapper = ({ children }) => {
  return (
    <div className="min-h-screen h-full bg-slate-200 md:px-[40px] px-4">
      <div className="max-w-7xl mx-auto">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Wrapper;
