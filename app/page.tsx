import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { Trust } from "@/components/sections/Trust";
import { Waitlist } from "@/components/sections/Waitlist";
import { ScrollTracker } from "@/components/ScrollTracker";
import { VocabMock } from "@/components/mockups/VocabMock";
import { ReadingMock } from "@/components/mockups/ReadingMock";
import { ListeningMock } from "@/components/mockups/ListeningMock";
import { WritingMock } from "@/components/mockups/WritingMock";
import { WritingMockCorrections } from "@/components/mockups/WritingMockCorrections";
import { SpeakingMock } from "@/components/mockups/SpeakingMock";
import { ProgressMock } from "@/components/mockups/ProgressMock";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />

      <FeatureSection
        id="feature-vocabulary"
        eyebrow="Vocabulary"
        title="Learn the words you need to pass"
        accent="chartreuse"
        mockup={<VocabMock />}
        bullets={[
          <>
            We suggest the key words you must know for each YKI topic —
            presented in short texts you can listen to
          </>,
          <>
            See an unfamiliar word? Highlight it to add it to your personal
            vocabulary list — with base form, translation, and the full phrase
            it appeared in
          </>,
          <>
            Practise in three ways: find the translation, unscramble letters,
            write from memory
          </>,
        ]}
      />

      <FeatureSection
        id="feature-reading"
        eyebrow="Reading"
        title="Read what you'll see on exam day"
        accent="electric"
        reverse
        mockup={<ReadingMock />}
        bullets={[
          <>
            Texts at two levels — A2/B1 to build confidence, B1/B2 to push
            you. Yes, we made easier ones on purpose
          </>,
          <>
            True/false, multiple choice, and open-ended questions — exactly
            the formats from the real test
          </>,
          <>
            Highlight unfamiliar words in any text — they go straight to your
            vocabulary list
          </>,
        ]}
      />

      <FeatureSection
        id="feature-listening"
        eyebrow="Listening"
        title="Train your ear with exam-format audio"
        accent="orange"
        mockup={<ListeningMock />}
        bullets={[
          <>Adjustable playback speed — slow down, then build up</>,
          <>
            Check the transcript after you answer — no peeking before
          </>,
          <>
            Highlight new words in the transcript to add them to your
            vocabulary list
          </>,
        ]}
      />

      <FeatureSection
        id="feature-writing"
        eyebrow="Writing"
        title="Write what you'll actually be asked"
        accent="neon-pink"
        reverse
        mockup={<WritingMock />}
        secondMockup={<WritingMockCorrections />}
        bullets={[
          <>
            AI gives you an honest pass / weak pass / fail assessment — based
            on official YKI requirements and the experience of Finnish
            language teachers
          </>,
          <>Model answers to compare against yours</>,
          <>
            After each task, your top 3 grammar mistakes and top 3 vocabulary
            mistakes are added to your personal &quot;To fix&quot; list
          </>,
        ]}
      />

      <FeatureSection
        id="feature-speaking"
        eyebrow="Speaking"
        title="Practise speaking with AI"
        accent="purple"
        mockup={<SpeakingMock />}
        bullets={[
          <>
            AI conversation partner for YKI-style speaking tasks — role-plays,
            semi-structured interviews and opinion questions
          </>,
          <>
            Adjust the AI&apos;s speech speed when you need a moment to catch
            up
          </>,
          <>Scored against YKI criteria — pass / weak pass / fail</>,
          <>Full conversation transcript available after each task</>,
        ]}
      />

      <FeatureSection
        id="feature-progress"
        eyebrow="Progress"
        title="Track your readiness, not just your streak"
        accent="chartreuse"
        reverse
        mockup={<ProgressMock />}
        bullets={[
          <>
            See how you&apos;re doing at a glance — green for pass, yellow for
            weak pass, and what&apos;s left to do
          </>,
          <>
            Your &quot;To fix&quot; list: most common grammar and vocabulary
            mistakes collected across all tasks
          </>,
        ]}
      />

      <Trust />
      <Waitlist />
      <Footer />
      <ScrollTracker />
    </main>
  );
}
