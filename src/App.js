import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import Header from "./components/Header";
import Table from "./components/Table";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Table />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
