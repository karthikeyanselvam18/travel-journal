import React from "react";
import Navbar from "./Navbar";
import Main from "./Main";
import data from "./data";

export default function App() {
  const elements = data.map((item) => {
    return <Main {...item} />;
  });

  return (
    <>
      <Navbar />
      <div className="container">{elements}</div>
    </>
  );
}
