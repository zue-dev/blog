import { useEffect } from "react";

export const useUtterance = (id: string) => {
  useEffect(() => {
    const scriptParentNode = document.getElementById(`issue${id}-comment`);
    if (!scriptParentNode) {
      return;
    }

    const script = document.createElement("script");
    script.src = "https://utteranc.es/client.js";
    script.async = true;
    script.setAttribute("repo", "zue-dev/blog");
    script.setAttribute("issue-number", id);
    script.setAttribute("theme", "github-light");
    script.setAttribute("crossorigin", "anonymouse");

    scriptParentNode.appendChild(script);

    return () => {
      scriptParentNode.removeChild(scriptParentNode.firstChild as Node);
    };
  }, [id]);
};
