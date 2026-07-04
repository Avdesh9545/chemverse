import { matterMCQs } from "@/data/mcqs/matter-in-our-surroundings";
import QuestionCard from "@/components/mcq/QuestionCard";

export default function MCQsPage() {
  const question = matterMCQs[0];

  return (
    <main className="mx-auto max-w-4xl px-6 py-10">
      <QuestionCard
        question={question.question}
        options={question.options}
      />
    </main>
  );
}