import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>zue</title>
        <meta property="og:title" content="zue log" />
        <meta property="og:url" content="https://blog-delta-cyan.vercel.app" />
        <meta property="og:type" content="blog" />
        <meta property="og:image" content="images/memoji2" />
        <meta property="og:site_name" content="zue_log" />
        <meta property="og:description" content="자유붕방 블로그" />
      </Head>
      <article className="text-center">
        <Image
          src="/images/memoji2.png"
          alt="profile"
          width={200}
          height={200}
          className="rounded-full"
        />
        <p>자기소개 자기소개 자기소개 자기소개 자기소개 자기소개 자기소개 </p>
      </article>
    </>
  );
};

export default Home;
