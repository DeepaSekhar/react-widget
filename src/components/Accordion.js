import React from "react";
import ReactDom from "react-dom";

const Accordion = ({ items }) => {
  const renderedItem = items.map((item) => {
    return (
      <React.Fragment key={item.title}>
        <div className="title active">
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className="content active">{item.content}</div>
      </React.Fragment>
    );
  });
  return <div className="ui styled accordion">{renderedItem}</div>;
};

export default Accordion;
