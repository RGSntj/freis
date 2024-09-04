import "./styles.scss";

interface Props {
  question: string;
}

export function QuestionCard({ question }: Props) {
  return (
    <div className="question-container">
      <p>{question}</p>
    </div>
  );
}
