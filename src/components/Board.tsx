import React from "react";
import Column from "./Column";
import SearchBar from "./SearchBar";
import RecentlyAccessed from "./RecentlyAccessed";
import useIssues from "../hooks/useIssues";

export default function BoardPage() {
  const {
    issues,
    backlog,
    inProgress,
    done,
    moveIssue,
    search,
    setSearch,
    undo,
    canUndo
  } = useIssues();

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: "1" }}>
        <SearchBar search={search} setSearch={setSearch} />
        <div style={{ display: "flex" }}>
          <Column title="Backlog" issues={backlog} moveIssue={moveIssue} />
          <Column title="In Progress" issues={inProgress} moveIssue={moveIssue} />
          <Column title="Done" issues={done} moveIssue={moveIssue} />
        </div>
        {canUndo && (
          <button onClick={undo} style={{ marginTop: "1rem" }}>
            Undo
          </button>
        )}
      </div>
      <RecentlyAccessed />
    </div>
  );
}
