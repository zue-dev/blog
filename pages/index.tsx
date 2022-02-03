import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>zue</title>
      </Head>
      <article>
        <Image
          src="/images/profile.jpeg"
          alt="profile"
          width={200}
          height={200}
          className="rounded-full"
        />
        <h1 className="text-xl font-bold">&lt;h1&gt;zue&lt;/h1&gt;</h1>
        <p>
          『Designed by Apple in California』는 우리 제품과 그 제조 공정이 담긴
          450장의 사진을 통해, 지난 20년간 Apple이 선보인 디자인을 되짚어
          봅니다. 이 책은 iMac에서부터 Apple Pencil까지, Apple 디자인의 변천사를
          시각적으로 보여줍니다.
        </p>
      </article>
    </>
  );
};

export default Home;
