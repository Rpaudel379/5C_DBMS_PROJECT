import Head from "next/head";
import { useRouter } from "next/router";

const Utils = () => {
  const { pathname: title } = useRouter();

  return (
    <Head>
      <title>{title} adsa</title>
    </Head>
  );
};

export default Utils;
