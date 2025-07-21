import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Issue } from "../types";

export default function RecentlyAccessed() {
  const [recent, setRecent] = useState<Issue[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("recentIssues");
    if (stored) {
      setRecent(JSON.parse(stored));
    }
  }, []);

  return (
    <div style={{ width: "200px", borderLeft: "1px solid #ccc", padding: "1rem" }}>
      <h4>Recently Accessed</h4>
      {recent.map((i) => (
        <div key={i.id}>
          <Link to={`/issue/${i.id}`}>{i.title}</Link>
        </div>
      ))}
    </div>
  );
}
