import React from "react";
import IssueCard from "./IssueCard";
import { Issue } from "../types";

interface ColumnProps {
  title: string;
  issues: Issue[];
  moveIssue: (id: string, status: string) => void;
}

export default function Column({ title, issues, moveIssue }: ColumnProps) {
  return (
    <div style={{ flex: "1", margin: "1rem", border: "1px solid #ddd", padding: "1rem" }}>
      <h2>{title}</h2>
      {issues.map(issue => (
        <IssueCard key={issue.id} issue={issue} moveIssue={moveIssue} />
      ))}
    </div>
  );
}
