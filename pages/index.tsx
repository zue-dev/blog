import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>zue</title>
      </Head>
      <div className="text-center">
        <Image
          src="/images/profile.jpeg"
          alt="profile"
          width={200}
          height={200}
          className="rounded-full"
        />
        <h1>Hi I&apos;m zue!</h1>
      </div>
    </>
  );
};

export default Home;
