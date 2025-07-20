import React from "react";

const Options = (props) => {
  const options = [
    { text: "Projects", handler: props.actions.handleProjects, id: 1 },
    { text: "Services", handler: props.actions.handleServices, id: 2 },
    { text: "Contact", handler: props.actions.handleContact, id: 3 },
    { text: "About Me", handler: props.actions.handleAbout, id: 4 },
    { text: "Report Issue", handler: props.actions.handleReportIssue, id: 5 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="options-container">{optionsMarkup}</div>;
};

export default Options;