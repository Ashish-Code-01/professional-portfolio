import { createChatBotMessage } from 'react-chatbot-kit';
import Options from './Options';
import LinkList from './LinkList';
import IssueForm from './IssueForm';

const config = {
    initialMessages: [
        createChatBotMessage("Hi! I'm Ashish's portfolio assistant. How can I help you today?", {
            widget: "options",
        }),
    ],
    widgets: [
        {
            widgetName: "options",
            widgetFunc: (props) => <Options {...props} />,
        },
        {
            widgetName: "projectLinks",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "View Projects",
                        url: "/project",
                        id: 1,
                    },
                ],
            },
        },
        {
            widgetName: "contactLinks",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "Contact",
                        url: "/contact",
                        id: 1,
                    },
                ],
            },
        },
        {
            widgetName: "serviceLinks",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "View Services",
                        url: "/services",
                        id: 1,
                    },
                ],
            },
        },
        {
            widgetName: "issueForm",
            widgetFunc: (props) => <IssueForm {...props} />,
        },
    ],
    customStyles: {
        botMessageBox: {
            backgroundColor: "#376B7E",
        },
        chatButton: {
            backgroundColor: "#376B7E",
        },
    },
};

export default config;