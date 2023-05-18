import "./App.css";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <>
      <section id="header">
        <Header />
      </section>
      <section className="relative">
        <Main />
        <Contact />
        <footer className="bg-black text-white font-roboto text-center text-sm py-4 border-t-2 border-dark md:border-t-4">
          @driannaird
        </footer>
      </section>
    </>
  );
}

export default App;
