import { faqKnowledgeBase, type FaqEntry } from "../data";

function normalize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 1);
}

const STOPWORDS = new Set([
  "the", "is", "are", "a", "an", "of", "to", "in", "on", "for", "and", "does",
  "do", "did", "what", "how", "who", "can", "you", "your", "i", "me", "my",
  "with", "about", "this", "that", "it", "he", "his", "him", "has", "have",
  "had", "been", "being", "was", "were", "will", "would", "could", "should",
]);

/**
 * Scores every FAQ entry against the query using overlapping keywords
 * (both the entry's curated keyword list and words from its question/answer
 * text), and returns the best match above a minimum confidence threshold.
 * This is intentionally simple and fully local — no LLM call, no API key,
 * so it works the moment the site is deployed anywhere.
 */
export function findBestAnswer(query: string): FaqEntry | null {
  const queryWords = normalize(query).filter((w) => !STOPWORDS.has(w));
  if (queryWords.length === 0) return null;

  let best: FaqEntry | null = null;
  let bestScore = 0;

  for (const entry of faqKnowledgeBase) {
    const haystack = [...entry.keywords, ...normalize(entry.question)];
    let score = 0;

    for (const qw of queryWords) {
      for (const hw of haystack) {
        if (hw === qw) score += 2;
        else if (hw.includes(qw) || qw.includes(hw)) score += 1;
      }
    }

    if (score > bestScore) {
      bestScore = score;
      best = entry;
    }
  }

  // Require at least a modest signal — otherwise defer to the fallback
  // response rather than confidently answering something unrelated.
  return bestScore >= 2 ? best : null;
}

export const FALLBACK_RESPONSE =
  "I don't have a specific answer for that yet — but Anoop personally answers " +
  "every message. Reach out directly and he'll get back to you.";

export const SUGGESTED_QUESTIONS = [
  "What services does Anoop offer?",
  "What projects has he worked on?",
  "How many years of experience does he have?",
  "How do I get started?",
];
