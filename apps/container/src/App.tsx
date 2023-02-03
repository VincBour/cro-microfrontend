import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useBrowserStore } from "ui";
import { BrowsePage } from "./browsePage/BrowsePage";
import { SearchPage } from "./searchPage/SearchPage";
import "./App.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <BrowsePage />,
  },
  {
    path: "/search",
    element: <SearchPage />,
  },
]);

export const App = () => {
  const { setQuotations } = useBrowserStore((state) => ({
    setQuotations: state.setQuotations,
  }));
  React.useEffect(() => {
    fetchData().then((result) => {
      setQuotations(result);
    });
  }, [setQuotations]);
  return (
    <div>
      <h1>Hello Container Application</h1>
      <RouterProvider router={router} />
    </div>
  );
};

const fetchData = async () => {
  const response = await fetch("http://localhost:3001/quotations.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  const result = await response.json();
  return result;
};
