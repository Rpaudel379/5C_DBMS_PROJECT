import { Dialog, Transition } from "@headlessui/react";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import { useGlobalContext } from "../context/userContext";

export default function InputModal({ showModal, setShowModal, type }) {
  const { userData } = useGlobalContext();
  const router = useRouter();

  const [changeValue, setChangeValue] = useState("");
  const [error, setError] = useState("");
  // let [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setShowModal(false);
  }

  /*  function openModal() {
    setShowModal(true);
  }
 */

  if (error) {
    setTimeout(() => {
      setError("");
    }, 2000);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (showModal) {
      try {
        setError("");

        const response = await fetch("api/changeinfo", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userid: userData.id,
            type,
            changeValue,
          }),
        });

        const data = await response.json();

        if (response.status == 200) {
          router.reload();
        } else {
          setError(data.message);
        }
      } catch (error) {
        console.log(error);
        setError(data.message);
      }

      //  closeModal();
    }
  };

  return (
    <>
      <Transition appear show={showModal} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Change {type}
                  {error && (
                    <p className="text-sm text-red-400 font-extralight">
                      {error}
                    </p>
                  )}
                </Dialog.Title>

                <form>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      <input
                        className="rounded-lg"
                        type="text"
                        placeholder={`change your ${type}`}
                        onChange={(e) => setChangeValue(e.target.value)}
                      />
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-red-500 border border-transparent rounded-md hover:bg-red-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500
                    mr-10
                    "
                      onClick={closeModal}
                    >
                      cancel
                    </button>

                    <button
                      type="submit"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                      onClick={handleSubmit}
                    >
                      change
                    </button>
                  </div>
                </form>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
