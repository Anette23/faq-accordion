import star from "../assets/img/icon-star.svg";
import AccordionQuestion from "./AccordionQuestion";
const Accordion = () => {
  return (
    <section className="bg-white rounded-lg min-h-64 absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] px-5 pt-7 md:px-8 lg:max-w-[40rem] min-w-[21rem] mx-auto">
      <header className="flex items-center gap-4 mb-6">
        <img src={star} alt="star" width={30} />
        <h1 className="text-2xl md:text-4xl font-bold text-darkPurple">FAQs</h1>
      </header>
      <aside>
        <AccordionQuestion />
      </aside>
    </section>
  );
};

export default Accordion;
