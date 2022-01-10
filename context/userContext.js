import { useState, useContext, createContext, useEffect } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState();
  const [profileImg, setProfileImg] = useState();
  const [allUsers, setAllUsers] = useState();
  const [allImages, setAllImages] = useState();

  useEffect(() => {
    const checkCookie = async () => {
      setLoading(true);
      try {
        const tokenRes = await fetch("api/userdata", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: null,
        });

        const data = await tokenRes.json();

        if (tokenRes.status == 200) {
          setUserData(data);
          setLoading(false);
        } else {
          setUserData(null);
          setLoading(false);
          console.log("token invalid");
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    checkCookie();
  }, [setUserData]);

  // select logged in user's profile Image
  useEffect(() => {
    const img = async () => {
      const profileImg = await fetch("api/profileimg", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      setProfileImg(await profileImg.json());
    };

    img();
  }, []);

  // select all profile Images
  useEffect(() => {
    const img = async () => {
      const profileImg = await fetch("api/profileimages", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      setAllImages(await profileImg.json());
    };

    img();
  }, []);

  // select all users
  useEffect(async () => {
    const users = await fetch("api/userdata", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    const data = await users.json();

    setAllUsers(data.allUsers);
  }, []);

  return (
    <AppContext.Provider
      value={{
        loading,
        userData,
        profileImg,
        allUsers,
        setUserData,
        setLoading,
        allImages,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
