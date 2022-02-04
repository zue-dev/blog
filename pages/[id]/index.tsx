import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getIssue } from "../../lib/api";
import ReactMarkdown from "react-markdown";

const Post: NextPage = () => {
  const [body, setBody] = useState("");
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      getIssue(Number(id))
        .then((res) => {
          setBody(res.repository.issue.body);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [id]);

  return (
    <div className="mb-16">
      <ReactMarkdown>{body}</ReactMarkdown>
    </div>
  );
};

export default Post;
