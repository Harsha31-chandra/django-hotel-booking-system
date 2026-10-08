import { Sparkles } from "lucide-react";

function QuickQuestions({
  questions,
  onQuestionClick,
}) {
  return (
    <div className="quick-section">

      <div className="section-title">

        <Sparkles size={17} />

        <span>
          Quick questions
        </span>

      </div>

      <div className="quick-grid">

        {questions.map(
          (question, index) => (
            <button
              key={index}
              className="quick-question"
              onClick={() =>
                onQuestionClick(question)
              }
            >
              {question}
            </button>
          )
        )}

      </div>

    </div>
  );
}

export default QuickQuestions;