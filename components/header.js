import Link from "next/link";

const Header = () => {
  return (
    <div>
      <div className="relative bg-transparent ">
        {/* <div className="max--7xl mx-auto"> */}
        <div className="relative z-10 pb-8 bg-slate-200 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-slate-200 transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl ">
                <span className="block xl:inline">DBMS mini project</span>{" "}
                <span className="block text-indigo-600 xl:inline mt-2">
                  LOGGING SYSTEM
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                This app is made for 5th semester Database Management System
                Mini Project. This is a login system app. Made by{" "}
                <span className="text-indigo-500 font-bold">
                  {" "}
                  Anish Paudel{" "}
                </span>
                and
                <span className="text-indigo-500 font-bold">
                  {" "}
                  Anurag Parajuli
                </span>
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
               {/*  <div className="rounded-md shadow">
                  <a
                    href="https://github.com/Rpaudel379/5C_DBMS_PROJECT"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    View code on Github
                  </a>
                </div> */}
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link href={"/project"}>
                    <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                      See Project
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
        {/* </div> */}
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          {/*  <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
            alt=""
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
