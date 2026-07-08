import { matterMCQs } from "./matter-in-our-surroundings";

const mcqs = {
  "matter-in-our-surroundings": matterMCQs,
};

export function getMCQs(slug: string) {
  return mcqs[slug as keyof typeof mcqs];
}