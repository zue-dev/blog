import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>zue</title>
      </Head>
      <article className="text-center">
        <Image
          src="/images/memoji2.png"
          alt="profile"
          width={200}
          height={200}
          className="rounded-full"
        />
        <h1>zue log</h1>
        <p>환영합니다 :)</p>
      </article>
    </>
  );
};

export default Home;
