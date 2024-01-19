import Accordion from "./components/Accordion";

const App = () => {
  return (
    <>
      <header className="bg-[url(./assets/img/background-pattern-mobile.svg)] bg-no-repeat bg-cover bg-top min-h-[40vh] sm:bg-[url(./assets/img/background-pattern-desktop.svg)]"></header>
      <main className="grid place-content-center bg-lightPink min-h-[70vh] mx-auto">
        <Accordion />
      </main>
    </>
  );
};

export default App;
