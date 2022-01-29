import React, { useState } from "react";
import ReactDom from "react-dom";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const onItemClicked = (index) => {
    setActiveIndex(index);
  };
  const renderedItem = items.map((item, index) => {
    return (
      <React.Fragment key={item.title}>
        <div
          className="title active"
          onClick={() => {
            onItemClicked(index);
          }}
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className="content active">{item.content}</div>
      </React.Fragment>
    );
  });
  return (
    <div className="ui styled accordion">
      {renderedItem}
      <h1>{activeIndex}</h1>
    </div>
  );
};

export default Accordion;
