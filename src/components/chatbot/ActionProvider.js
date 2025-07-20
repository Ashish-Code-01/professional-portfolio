import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
    const handleHello = () => {
        const botMessage = createChatBotMessage('Hello! Nice to meet you!');

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };

    const handleProjects = () => {
        const botMessage = createChatBotMessage(
            "I'd be happy to show you some of my projects!",
            {
                widget: "projectLinks",
            }
        );

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };

    const handleContact = () => {
        const botMessage = createChatBotMessage(
            "You can contact me through the contact page:",
            {
                widget: "contactLinks",
            }
        );

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };

    const handleServices = () => {
        const botMessage = createChatBotMessage(
            "Here are the services I offer:",
            {
                widget: "serviceLinks",
            }
        );

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };

    const handleAbout = () => {
        const botMessage = createChatBotMessage(
            "I'm Ashish Vishwakarma, a Full Stack Web Developer with expertise in React, Next.js, and more. You can learn more about me on the About page."
        );

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };

    const handleUnknown = () => {
        const botMessage = createChatBotMessage(
            "I'm not sure I understand. You can ask me about projects, services, or how to contact Ashish."
        );

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };
    
    const handleReportIssue = () => {
        const botMessage = createChatBotMessage(
            "I'm sorry to hear you're having an issue. Please fill out this form to report it:",
            {
                widget: "issueForm",
            }
        );
        
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };
    
    const handleIssueSaved = () => {
        const botMessage = createChatBotMessage(
            "Thank you for reporting the issue! We'll look into it as soon as possible. Is there anything else I can help you with?",
            {
                widget: "options",
            }
        );
        
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };

    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    actions: {
                        handleHello,
                        handleProjects,
                        handleContact,
                        handleServices,
                        handleAbout,
                        handleUnknown,
                        handleReportIssue,
                        handleIssueSaved,
                    },
                });
            })}
        </div>
    );
};

export default ActionProvider;