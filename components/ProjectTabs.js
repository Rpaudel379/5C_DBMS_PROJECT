import { useState } from "react";
import { Tab } from "@headlessui/react";
import ProjectHome from "./ProjectHome";
import ProjectDashboard from "./ProjectDashboard";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <div className="w-full max-w-screen-2xl overflow-hidden px-2 py-16 sm:px-0 ">
      <Tab.Group>
        <Tab.List className="p-1">
          <div className="flex max-w-md space-x-1 bg-blue-900/20  rounded-xl">
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg",
                  "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              <p>Home</p>
            </Tab>{" "}
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg",
                  "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              <p>Dashboard</p>
            </Tab>
          </div>
        </Tab.List>
        <Tab.Panels className="mt-2 w-full">
          <Tab.Panel>
            <ProjectHome />
          </Tab.Panel>
          <Tab.Panel>
            <ProjectDashboard />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
