import React from "react";
import { Link } from "react-router-dom";
import { Issue } from "../types";

interface CardProps {
  issue: Issue;
  moveIssue: (id: string, status: string) => void;
}

export default function IssueCard({ issue, moveIssue }: CardProps) {
  const statuses = ["Backlog", "In Progress", "Done"];
  const nextStatus = statuses[(statuses.indexOf(issue.status) + 1) % statuses.length];

  return (
    <div style={{ border: "1px solid #aaa", margin: "0.5rem", padding: "0.5rem" }}>
      <Link to={`/issue/${issue.id}`}>{issue.title}</Link>
      <p>{issue.status}</p>
      <button onClick={() => moveIssue(issue.id, nextStatus)}>Move to {nextStatus}</button>
    </div>
  );
}
