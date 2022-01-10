import { useRouter } from "next/router";
import { Fragment, useEffect, useRef, useState } from "react";

import Link from "next/link";
import ModalBox from "../components/ModalBox";
import { useGlobalContext } from "../context/userContext";
import ProjectTabs from "../components/ProjectTabs";

const Project = ({ data }) => {
  const { userData } = useGlobalContext();

  const [isLogged, setIsLogged] = useState(data ? true : false);

  const router = useRouter();

  if (!isLogged) {
    setTimeout(() => {
      router.push("/signin");
    }, 2500);

    return <ModalBox />;
  }

  return <ProjectTabs />;
};

export default Project;

export const getServerSideProps = (context) => {
  const data = context.req.cookies.token || null;
  
  return {
    props: { data },
  };
};
