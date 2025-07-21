import { useState, useEffect } from "react";
import issuesData from "../data/issues.json";
import { Issue } from "../types";
import { computePriority } from "../utils/priorityScore";

export default function useIssues() {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [search, setSearch] = useState("");
  const [prevState, setPrevState] = useState<Issue[] | null>(null);

  useEffect(() => {
    setIssues(issuesData);
  }, []);

  const filtered = issues
    .filter(i => i.title.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => computePriority(b) - computePriority(a));

  const backlog = filtered.filter(i => i.status === "Backlog");
  const inProgress = filtered.filter(i => i.status === "In Progress");
  const done = filtered.filter(i => i.status === "Done");

  function moveIssue(id: string, status: string) {
    setPrevState(issues);
    const updated = issues.map(i => i.id === id ? { ...i, status } : i);
    setIssues(updated);
    setTimeout(() => setPrevState(null), 5000);
  }

  function undo() {
    if (prevState) {
      setIssues(prevState);
      setPrevState(null);
    }
  }

  return { issues, backlog, inProgress, done, moveIssue, search, setSearch, undo, canUndo: !!prevState };
}
