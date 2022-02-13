import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getIssues, IRepositoryNode } from "../lib/api";
import s from "../styles/home.module.scss";

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
        <meta property="og:url" content="blah" />
        <meta property="og:type" content="blog" />
        <meta property="og:image" content="/images/memoji2" />
        <meta property="og:site_name" content="zue_log" />
        <meta property="og:description" content="자유붕방 블로그" />
      </Head>
      <section>
        <article className={s.image}>
          <Image
            src="/images/memoji2.png"
            alt="profile"
            width={200}
            height={200}
            className="rounded-full"
          />
        </article>
        <article className={s.content}>
          {posts?.map((issue: IRepositoryNode) => (
            <Link
              key={issue.node.number}
              href={`/${encodeURIComponent(issue.node.number)}`}
            >
              <a className={s.link}>
                <div className={s.titleWrap}>
                  <p className={s.title}>{issue.node.title}</p>
                  <p className={s.date}>
                    {issue.node.createdAt.toString().slice(0, 10)}
                  </p>
                </div>
                <div className={s.iconWrap}>
                  {issue.node.comments.totalCount ? (
                    <>
                      <Image
                        src="/images/chatbox-outline.svg"
                        alt="comment"
                        width={20}
                        height={20}
                      />
                      <span className={s.count}>
                        {issue.node.comments.totalCount}
                      </span>
                    </>
                  ) : null}
                </div>
              </a>
            </Link>
          ))}
        </article>
      </section>
    </>
  );
};

export default Home;
