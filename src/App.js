import React from "react";
import ReactDom from "react-dom";
import Accordion from "./components/Accordion";
import Counter from "./components/Counter";
import Search from "./components/Search";
const items = [
  { title: "Title 1", content: "deepa1" },
  {
    title: "Title 2",
    content: "deepa2",
  },
  {
    title: "Title 3",
    content: "deepa3",
  },
];

export default () => {
  return (
    <div>
      <Search />
    </div>
  );
};
