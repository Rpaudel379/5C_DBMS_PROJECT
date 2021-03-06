import { Fragment } from "react";
import { Disclosure, Menu, Transition, Popover } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { useGlobalContext } from "../context/userContext";
import { useRouter } from "next/router";
import Link from "next/link";

const navigation = [
  { name: "Home", href: "/", current: null },
  { name: "Project", href: "/project", current: null },
];

const Navbar = () => {
  const { userData } = useGlobalContext();
  const router = useRouter();

  navigation.map((nav) =>
    router.pathname == nav.href ? (nav.current = true) : (nav.current = false)
  );

  const handleSignout = async () => {
    try {
      const tokenRes = await fetch("api/userdata", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: null,
      });
      router.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Popover>
      <div className="relative pt-6 px-4 sm:px-0">
        <nav
          className="relative flex items-center justify-between sm:h-10 lg:justify-start"
          aria-label="Global"
        >
          <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
            <div className="flex items-center justify-between w-full md:w-auto">
              <Link href="/">
                <a>
                  <span className="sr-only">Workflow</span>

                  <img
                    className="h-8 w-auto sm:h-10"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  />
                </a>
              </Link>
              <div className="-mr-2 flex items-center md:hidden">
                <Popover.Button className="bg-transparent rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
          </div>
          <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
            {navigation.map((item) => (
              <Link href={item.href} key={item.name}>
                <a
                  className={`font-medium text-gray-500 hover:text-gray-900 ${
                    item.current && "text-slate-900 !font-bold"
                  }`}
                >
                  {item.name}
                </a>
              </Link>
            ))}

            {/*//? LOGIN or SIGNUP */}
            {/*//? LOGIN or SIGNUP */}
            {/*//? LOGIN or SIGNUP */}
            {/*//? LOGIN or SIGNUP */}

            {userData ? (
              <button
                onClick={handleSignout}
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Signout
              </button>
            ) : (
              <Link href={"/signin"}>
                <a className="font-medium text-indigo-600 hover:text-indigo-500">
                  Sign in
                </a>
              </Link>
            )}

            {/*//? LOGIN or SIGNUP */}
            {/*//? LOGIN or SIGNUP */}
            {/*//? LOGIN or SIGNUP */}
            {/*//? LOGIN or SIGNUP */}
          </div>
        </nav>
      </div>

      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute z-50 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="px-5 pt-4 flex items-center justify-between">
              <div>
                <Link href={"/"}>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt=""
                  />
                </Link>
              </div>
              <div className="-mr-2">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Close main menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link href={item.href} key={item.name}>
                  <a
                    key={item.name}
                    className={`block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-gray-900 hover:bg-gray-50 ${
                      item.current && "text-gray-700"
                    }`}
                  >
                    {item.name}
                  </a>
                </Link>
              ))}
            </div>

            {userData ? (
              <button
                className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
                onClick={handleSignout}
              >
                Signout
              </button>
            ) : (
              <Link href="/signin">
                <a className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100">
                  Sign in
                </a>
              </Link>
            )}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Navbar;
