import { useGlobalContext } from "../context/userContext";
import { CalendarIcon } from "@heroicons/react/outline";
import InputModal from "./InputModal";
import { useState } from "react";
import ProjectAvatar from "./ProjectAvatar";

const ProjectDashboard = () => {
  const { userData } = useGlobalContext();
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setShowModal(true);
  };

  return (
    <div className="mt-5 max-w-4xl">
      <InputModal showModal={showModal} setShowModal={setShowModal} />
      <div className="flex flex-col md:flex-row space-y-3 py-4   md:items-start justify-between">
        <div className="flex flex-1 space-x-2">
          <ProjectAvatar />

          <div className="mt-5">
            <p className="text-sm md:text-2xl lg:text-4xl ">
              Welcome
              <span className="font-semibold">
                {" "}
                {userData?.firstname} {userData?.lastname}
              </span>
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-5">
          <CalendarIcon className="text-grey-500 h-7" />
          <p className="text-xl"> {new Date().toDateString()}</p>
        </div>
      </div>

      <div className="bg-white shadow overflow-hidden rounded-lg mt-5">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            User Information
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Taken from database
          </p>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Full name</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex justify-between">
                <p>
                  {userData?.firstname} {userData?.lastname}{" "}
                </p>

                <button
                  className="text-sm cursor-pointer text-red-400"
                  onClick={handleChange}
                >
                  {" "}
                  change
                </button>
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                {" "}
                Email address
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {userData?.email}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Country</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {userData?.country}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">City</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {userData?.city}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">State</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {userData?.state}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default ProjectDashboard;
