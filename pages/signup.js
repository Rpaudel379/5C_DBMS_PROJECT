import { useState } from "react";
import { useRouter } from "next/router";

export default function SignUp() {
  const router = useRouter();

  const [credentials, setCredentials] = useState({
    firstname: "",
    lastname: "",
    email: "",
    country: "India",
    city: "",
    state: "",
    password: "",
  });

  const [error, setError] = useState();
  const [disabled, setDisabled] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setDisabled(true);
      setError(false);

      const response = await fetch("api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          credentials,
        }),
      });

      const data = await response.json();

      if (response.status == 200) {
        //! implement cookies
        //! implement cookies
        //! implement cookies

        setTimeout(() => {
          // router.push("/project");
          window.location.href = "/project";
        }, 2000);
      } else {
        setError(data.message);
      }

      setDisabled(false);
    } catch (error) {
      console.log(error, "register error");
      setDisabled(false);
    }
  };

  return (
    <>
      <div className="mt-10 md:mt-20 flex flex-col md:justify-center md:items-center">
        <div className="max-w-4xl">
          <div className="mt-5 md:mt-0 md:col-span-2">
            <h1 className="text-center mb-10 text-4xl tracking-tight font-bold text-slate-700 sm:text-5xl md:text-5xl">
              Register
            </h1>

            {/* //! form */}

            <form onSubmit={handleSubmit}>
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  {/* //! if error */}
                  {/* //! if error */}
                  {error && (
                    <p className="text-center  text-red-500 pb-5">{error}</p>
                  )}

                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        First name
                      </label>
                      <input
                        disabled={disabled}
                        onChange={(e) =>
                          setCredentials({
                            ...credentials,
                            firstname: e.target.value,
                          })
                        }
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Last name
                      </label>
                      <input
                        disabled={disabled}
                        onChange={(e) =>
                          setCredentials({
                            ...credentials,
                            lastname: e.target.value,
                          })
                        }
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Password
                      </label>
                      <input
                        disabled={disabled}
                        onChange={(e) =>
                          setCredentials({
                            ...credentials,
                            password: e.target.value,
                          })
                        }
                        type="password"
                        name="email-address"
                        id="password"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>{" "}
                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="email-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email address
                      </label>
                      <input
                        disabled={disabled}
                        onChange={(e) =>
                          setCredentials({
                            ...credentials,
                            email: e.target.value,
                          })
                        }
                        type="text"
                        name="email-address"
                        id="email-address"
                        autoComplete="email"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Country
                      </label>

                      <select
                        disabled={disabled}
                        onChange={(e) =>
                          setCredentials({
                            ...credentials,
                            country: e.target.value,
                          })
                        }
                        defaultValue={credentials.country}
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option>India</option>
                        <option>Nepal</option>
                        <option>China</option>
                        <option>Bhutan</option>
                        <option>Bangladesh</option>
                        <option>Pakistan</option>
                      </select>
                    </div>
                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-700"
                      >
                        City
                      </label>
                      <input
                        disabled={disabled}
                        onChange={(e) =>
                          setCredentials({
                            ...credentials,
                            city: e.target.value,
                          })
                        }
                        type="text"
                        name="city"
                        id="city"
                        autoComplete="address-level2"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="region"
                        className="block text-sm font-medium text-gray-700"
                      >
                        State / Province
                      </label>
                      <input
                        disabled={disabled}
                        onChange={(e) =>
                          setCredentials({
                            ...credentials,
                            state: e.target.value,
                          })
                        }
                        type="text"
                        name="region"
                        id="region"
                        autoComplete="address-level1"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    disabled={disabled}
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Register
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
