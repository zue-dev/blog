import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getIssue, IIssue } from "../../lib/api";
import ReactMarkdown from "react-markdown";
import styles from "../../styles/post.module.scss";
import { useUtterance } from "../../lib/hooks/useUtterance";

const Post: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [issue, setIssue] = useState<IIssue>({
    title: "",
    body: "",
    createdAt: "",
  });

  useUtterance(id as string);

  useEffect(() => {
    if (id) {
      getIssue(Number(id))
        .then((res) => {
          setIssue(res.repository.issue);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [id]);

  return (
    <>
      <div className="my-6">
        <h1 className="mb-1 text-xl font-bold leading-7 lg:mb-2 lg:text-2xl">
          {issue.title}
        </h1>
        <p className="text-sm text-gray-400">{issue.createdAt.slice(0, 10)}</p>
        <hr className="mt-4" />
      </div>
      <div className={styles.content}>
        <ReactMarkdown>{issue.body}</ReactMarkdown>
      </div>
      <div className="my-16" id={`issue${id}-comment`}></div>
    </>
  );
};

export default Post;
