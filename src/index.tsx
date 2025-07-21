import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import BoardPage from "./components/Board";
import IssueDetailPage from "./components/IssueDetailPage";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/board" element={<BoardPage />} />
        <Route path="/issue/:id" element={<IssueDetailPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
