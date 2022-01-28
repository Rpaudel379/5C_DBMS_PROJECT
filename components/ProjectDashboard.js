import { useGlobalContext } from "../context/userContext";
import { CalendarIcon, PencilAltIcon } from "@heroicons/react/outline";
import InputModal from "./InputModal";
import { useState } from "react";
import ProjectAvatar from "./ProjectAvatar";

const ProjectDashboard = () => {
  const { userData } = useGlobalContext();
  const [showModal, setShowModal] = useState(false);
  const [type, setType] = useState();

  const handlechange = (e) => {
    setShowModal(true);
  };

  return (
    <div className="mt-5 max-w-4xl">
      <InputModal
        showModal={showModal}
        setShowModal={setShowModal}
        type={type}
      />
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
            {userData.bio ? (
              <p
                className="mt-3 text-sm text-gray-600 cursor-pointer"
                onClick={() => {
                  handlechange();
                  setType("bio");
                }}
                title="your bio"
              >
                {userData.bio}
              </p>
            ) : (
              <p
                className="mt-3 text-sm text-stone-700 cursor-pointer"
                onClick={() => {
                  handlechange();
                  setType("bio");
                }}
                title="add a bio"
              >
                add a bio
              </p>
            )}
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
                  onClick={() => {
                    handlechange();
                    setType("name");
                  }}
                >
                  <PencilAltIcon className="h-5 text-sm cursor-pointer text-red-400" />
                </button>
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                {" "}
                Email address
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex justify-between">
                <p>{userData?.email}</p>

                <button
                  onClick={() => {
                    handlechange();
                    setType("email");
                  }}
                >
                  <PencilAltIcon className="h-5 text-sm cursor-pointer text-red-400" />
                </button>
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Country</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex justify-between">
                <p>{userData?.country}</p>
                <button
                  onClick={() => {
                    handlechange();
                    setType("country");
                  }}
                >
                  <PencilAltIcon className="h-5 text-sm cursor-pointer text-red-400" />
                </button>
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">City</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex justify-between">
                <p>{userData?.city}</p>
                <button
                  onClick={() => {
                    handlechange();
                    setType("city");
                  }}
                >
                  <PencilAltIcon className="h-5 text-sm cursor-pointer text-red-400" />
                </button>
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">State</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex justify-between">
                <p>{userData?.state}</p>
                <button
                  onClick={() => {
                    handlechange();
                    setType("state");
                  }}
                >
                  <PencilAltIcon className="h-5 text-sm cursor-pointer text-red-400" />
                </button>
              </dd>
            </div>{" "}
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Password</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex justify-between">
                <p>****</p>
                <button
                  onClick={() => {
                    handlechange();
                    setType("password");
                  }}
                >
                  <PencilAltIcon className="h-5 text-sm cursor-pointer text-red-400" />
                </button>
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="mt-5 ">
        <button className="rounded-lg bg-red-500 text-white text-sm px-4 py-1 hover:bg-red-400 ">
          delete your account
        </button>
      </div>
    </div>
  );
};

export default ProjectDashboard;
