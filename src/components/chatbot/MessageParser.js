import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes('hello') ||
      lowerCaseMessage.includes('hi') ||
      lowerCaseMessage.includes('hey')) {
      actions.handleHello();
    } else if (lowerCaseMessage.includes('project') ||
      lowerCaseMessage.includes('work') ||
      lowerCaseMessage.includes('portfolio')) {
      actions.handleProjects();
    } else if (lowerCaseMessage.includes('contact') ||
      lowerCaseMessage.includes('email') ||
      lowerCaseMessage.includes('reach')) {
      actions.handleContact();
    } else if (lowerCaseMessage.includes('service') ||
      lowerCaseMessage.includes('offer') ||
      lowerCaseMessage.includes('provide')) {
      actions.handleServices();
    } else if (lowerCaseMessage.includes('about') ||
      lowerCaseMessage.includes('who')) {
      actions.handleAbout();
    } else if (lowerCaseMessage.includes('issue') ||
      lowerCaseMessage.includes('problem') ||
      lowerCaseMessage.includes('bug') ||
      lowerCaseMessage.includes('error') ||
      lowerCaseMessage.includes('not working')) {
      actions.handleReportIssue();
    } else {
      actions.handleUnknown();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions: actions,
        });
      })}
    </div>
  );
};

export default MessageParser;