import {
  Bell,
  CalendarDays,
  ArrowUpRight,
} from "lucide-react";

import ChatBox from "../components/ChatBox";

import QuickQuestions from "../components/QuickQuestions";

import {
  quickQuestions,
  recentUpdates,
} from "../data/mockData";

function Dashboard() {

  const handleQuickQuestion = (
    question
  ) => {

    window.dispatchEvent(
      new CustomEvent(
        "quick-question",
        {
          detail: question,
        }
      )
    );

    alert(
      `You selected:\n\n${question}\n\nYou can also type this question in the AI box below.`
    );
  };

  return (
    <main className="dashboard">

      <div className="dashboard-header">

        <div>

          <p className="eyebrow">
            ENTERPRISE KNOWLEDGE WORKSPACE
          </p>

          <h1>
            Good morning 👋
          </h1>

          <p className="dashboard-subtitle">
            Ask questions and find
            authorized NovaTech knowledge.
          </p>

        </div>

        <button className="notification-button">
          <Bell size={20} />
        </button>

      </div>

      <div className="ai-workspace">

        <ChatBox />

      </div>

      <QuickQuestions
        questions={quickQuestions}
        onQuestionClick={
          handleQuickQuestion
        }
      />

      <section className="updates-section">

        <div className="section-header">

          <div>

            <h2>
              Recent policy updates
            </h2>

            <p>
              Latest changes in the
              knowledge base
            </p>

          </div>

          <CalendarDays size={20} />

        </div>

        <div className="updates-grid">

          {recentUpdates.map(
            (update, index) => (

              <div
                className="update-card"
                key={index}
              >

                <div className="update-top">

                  <span className="update-category">
                    {update.category}
                  </span>

                  <ArrowUpRight
                    size={17}
                  />

                </div>

                <h3>
                  {update.title}
                </h3>

                <p>
                  Updated {update.date}
                </p>

              </div>

            )
          )}

        </div>

      </section>

    </main>
  );
}

export default Dashboard;