import { motion } from "framer-motion";
import Timeline, { SectionHeading } from "../components/Timeline";
import Skills from "../components/Skills";
import Process from "../components/Process";
import Principles from "../components/Principles";
import PageBanner from "../components/PageBanner";
import { contact } from "../data";

export default function About() {
  return (
    <>
      <PageBanner
        eyebrow="About"
        title={
          <>
            Fifteen years of building things
            <br className="hidden md:block" /> that were meant to last.
          </>
        }
        badges={["15+ years in the trade", "Lucknow & UP"]}
      />

      <section className="pt-14 pb-8 px-6 md:px-10">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-fog text-base leading-relaxed space-y-4"
          >
            <p>
              Anoop Mishra started as a Project Manager in 2015, working
              construction and glass installation jobs from the ground up.
              What began as managing crews on residential builds grew into a
              full practice spanning structural engineering, custom
              glasswork, and interior design — because the buildings that
              hold up best are the ones where every part was considered
              together, not handed off piece by piece.
            </p>
            <p>
              Today, that means leading projects that blend traditional
              construction craftsmanship with modern glass technology —
              from institutional glasswork at places like Central Academy,
              to commercial glazing at properties like the Park Inn by
              Radisson, to residential facades built for people who notice
              the difference between "finished" and "finished well."
            </p>
            <p>
              Based in {contact.serviceArea}, working directly with clients
              from the first site visit through handover — no layers of
              subcontracted management between you and the person actually
              accountable for the work.
            </p>
            <p>
              Every project on the Projects and Gallery pages includes not
              just what was built, but the reasoning behind the material and
              design choices made along the way — because "why" matters as
              much as "what" when it's your building.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <SectionHeading eyebrow="How I work" title="The reasoning behind the process" />
          <Principles />
        </div>
      </section>

      <Timeline />
      <Skills />

      <section className="py-28 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <SectionHeading eyebrow="How we work" title="A process built to remove surprises" />
          <Process />
        </div>
      </section>
    </>
  );
}
