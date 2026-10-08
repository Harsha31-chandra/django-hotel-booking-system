import { useState } from "react";

import {
  Send,
  Bot,
  User,
} from "lucide-react";

function ChatBox() {

  const [question, setQuestion] =
    useState("");

  const [messages, setMessages] =
    useState([]);

  const generateResponse = (text) => {

    const lower =
      text.toLowerCase();

    if (lower.includes("leave")) {

      return {
        answer:
          "Employees can apply for leave through the organization's leave request process. The applicable leave type, balance and approval requirements depend on the employee's role and current policy.",

        sources: [
          "Employee Leave Policy",
          "Leave Application Procedure",
        ],
      };
    }

    if (
      lower.includes("wfh") ||
      lower.includes("work from home")
    ) {

      return {
        answer:
          "Work-from-home eligibility depends on the applicable WFH policy, employee role and approval requirements. The AI system will check the relevant policy and authorized employee information before providing a personalized answer.",

        sources: [
          "Work From Home Policy",
          "Employee Eligibility Guidelines",
        ],
      };
    }

    if (
      lower.includes("travel")
    ) {

      return {
        answer:
          "Travel expenses are governed by the organization's travel and expense policy. Eligible expenses may include transportation, accommodation and meals, subject to applicable limits and approval requirements.",

        sources: [
          "Travel Expense Policy",
          "Travel Approval Procedure",
        ],
      };
    }

    if (
      lower.includes("it") ||
      lower.includes("support")
    ) {

      return {
        answer:
          "For an IT issue, you can submit an IT support request through the organization's support workflow. The request should include the issue description, affected system and relevant details.",

        sources: [
          "IT Support Procedure",
          "IT Service Guidelines",
        ],
      };
    }

    return {
      answer:
        "I found your question, but the current demonstration is using mock knowledge. Once the RAG backend is connected, I will retrieve authorized enterprise documents, apply access control and generate an answer with verified sources.",

      sources: [
        "Enterprise Knowledge Base",
      ],
    };
  };

  const sendMessage = () => {

    if (!question.trim()) {
      return;
    }

    const userQuestion =
      question;

    const response =
      generateResponse(
        userQuestion
      );

    setMessages(
      (previous) => [
        ...previous,

        {
          type: "user",
          text: userQuestion,
        },

        {
          type: "assistant",
          text: response.answer,
          sources: response.sources,
        },
      ]
    );

    setQuestion("");
  };

  const handleKeyDown = (event) => {

    if (
      event.key === "Enter" &&
      !event.shiftKey
    ) {

      event.preventDefault();

      sendMessage();
    }
  };

  return (
    <div className="chat-area">

      {messages.length === 0 && (

        <div className="empty-chat">

          <div className="ai-circle">
            <Bot size={30} />
          </div>

          <h2>
            How can I help you?
          </h2>

          <p>
            Ask about NovaTech policies,
            procedures, workflows and
            enterprise knowledge.
          </p>

        </div>
      )}

      {messages.map(
        (message, index) => (

          <div
            key={index}
            className={
              message.type === "user"
                ? "message-row user-message"
                : "message-row"
            }
          >

            <div className="message-icon">

              {message.type ===
              "user" ? (
                <User size={17} />
              ) : (
                <Bot size={17} />
              )}

            </div>

            <div className="message-content">

              <div className="message-text">
                {message.text}
              </div>

              {message.sources && (

                <div className="sources">

                  <span className="sources-title">
                    Sources
                  </span>

                  {message.sources.map(
                    (source, sourceIndex) => (

                      <span
                        className="source-tag"
                        key={sourceIndex}
                      >
                        {source}
                      </span>

                    )
                  )}

                </div>

              )}

            </div>

          </div>

        )
      )}

      <div className="chat-input-wrapper">

        <textarea
          placeholder="Ask anything about NovaTech..."
          value={question}
          onChange={(event) =>
            setQuestion(
              event.target.value
            )
          }
          onKeyDown={handleKeyDown}
          rows="1"
        />

        <button
          className="send-button"
          onClick={sendMessage}
        >
          <Send size={18} />
        </button>

      </div>

      <p className="ai-disclaimer">
        AI responses will be generated from
        authorized enterprise knowledge.
      </p>

    </div>
  );
}

export default ChatBox;