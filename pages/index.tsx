import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getIssues, IRepositoryNode } from "../lib/api";

const Home: NextPage = () => {
  const [posts, setPosts] = useState<any>([]);
  useEffect(() => {
    getIssues()
      .then((res) => {
        setPosts(res?.repository.issues.edges);
      })
      .catch((e) => {
        setPosts([{ node: { title: `데이터 불러오기 실패 ${e}` } }]);
      });
  }, []);

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
      <section>
        <article className="text-center">
          <Image
            src="/images/memoji2.png"
            alt="profile"
            width={200}
            height={200}
            className="rounded-full"
          />
          <p className="font-bold">zue log</p>
        </article>
        <article>
          {posts?.map((issue: IRepositoryNode, idx: number) => (
            <div key={idx}>{issue.node.title}</div>
          ))}
        </article>
      </section>
    </>
  );
};

export default Home;
