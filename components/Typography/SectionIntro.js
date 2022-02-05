import { PageHeading } from "./PageHeading";

export const SectionIntro = ({ headingType, heading, children }) => {
  return (
    <>
      <PageHeading Type={headingType}>{heading}</PageHeading>
      <section className="font-sans text-darkPurple text-2xl leading-9 text-center max-w-xl mx-auto mb-14">
        {children}
      </section>
    </>
  );
};
