import { Issue } from "../types";

export function computePriority(issue: Issue): number {
  const days = Math.floor(
    (new Date().getTime() - new Date(issue.createdAt).getTime()) / (1000 * 60 * 60 * 24)
  );
  return issue.severity * 10 + days * -1 + issue.userDefinedRank;
}
