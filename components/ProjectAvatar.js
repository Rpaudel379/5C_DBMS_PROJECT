import { CloudUploadIcon, CheckIcon, XIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { useGlobalContext } from "../context/userContext";
import { useRouter } from "next/router";

const ProjectAvatar = () => {
  const router = useRouter();

  const { userData, profileImg } = useGlobalContext();
  const [imgName, setImgName] = useState("");
  const [img64, setImg64] = useState("");
  const [error, setError] = useState("");

  const handleImageChange = (e) => {
    const selected = e.target.files[0];
    setImgName(selected.name);

    let reader = new FileReader();
    reader.readAsDataURL(selected);

    reader.onload = (e) => {
      setImg64(e.target.result);
    };
  };

  const removeAll = () => {
    setImgName("");
    setImg64("");
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("api/profileimg", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userid: userData.id,
          image: img64,
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
      setError("error");
    }
  };

  return (
    <div className="pl-1">
      <img
        className="inline-block h-32 w-32 rounded-full object-cover ring-2 ring-white"
        src={profileImg?.image}
        alt="img"
      />

      <div className="mt-2">
        {error && <p className="text-red-500">{error}</p>}
        <label
          htmlFor="image"
          className="flex cursor-pointer items-center space-x-2 group hover"
        >
          <CloudUploadIcon className="h-5" />
          <p className="text-sm text-gray-500 ">
            {imgName ? imgName : "change profile picture"}
          </p>
        </label>
        <input
          id="image"
          type="file"
          accept="image/*"
          name="image"
          onChange={handleImageChange}
          hidden
        />
      </div>

      {imgName && (
        <div className="flex h-5 space-x-5 mt-3">
          <XIcon className="cursor-pointer" onClick={removeAll} />
          <CheckIcon className="cursor-pointer" onClick={handleSubmit} />
        </div>
      )}
    </div>
  );
};

export default ProjectAvatar;
