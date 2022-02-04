import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
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
        <meta property="og:image" content="/images/memoji2" />
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
        <article className="mt-16">
          {posts?.map((issue: IRepositoryNode) => (
            <Link
              key={issue.node.number}
              href={`/${encodeURIComponent(issue.node.number)}`}
            >
              <a className="flex justify-between mb-10">
                <div className="basis-0 shrink grow pr-4">
                  <p className="font-bold text-xl break-words mb-1">
                    {issue.node.title}
                  </p>
                  <p className="text-xs text-gray-400">
                    {issue.node.createdAt.toString().slice(0, 10)}
                  </p>
                </div>
                {issue.node.comments.totalCount ? (
                  <div className="flex items-center">
                    <Image
                      src="/images/bell.png"
                      alt="comment"
                      width={24}
                      height={24}
                    />
                  </div>
                ) : null}
              </a>
            </Link>
          ))}
        </article>
      </section>
    </>
  );
};

export default Home;
