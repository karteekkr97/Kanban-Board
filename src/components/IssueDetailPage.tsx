import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import issuesData from "../data/issues.json";
import { Issue } from "../types";

export default function IssueDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [issue, setIssue] = useState<Issue | null>(null);

  useEffect(() => {
    const found = issuesData.find(i => i.id === id);
    if (found) {
      setIssue(found);
      const stored = localStorage.getItem("recentIssues");
      let recents: Issue[] = stored ? JSON.parse(stored) : [];
      recents = [found, ...recents.filter(r => r.id !== found.id)].slice(0, 5);
      localStorage.setItem("recentIssues", JSON.stringify(recents));
    }
  }, [id]);

  function markResolved() {
    if (issue) {
      setIssue({ ...issue, status: "Done" });
      navigate("/board");
    }
  }

  if (!issue) return <div>Issue not found</div>;

  return (
    <div style={{ padding: "1rem" }}>
      <h2>{issue.title}</h2>
      <p>Status: {issue.status}</p>
      <button onClick={markResolved}>Mark as Resolved</button>
    </div>
  );
}
