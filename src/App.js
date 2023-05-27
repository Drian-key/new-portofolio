import { useEffect, useState } from "react";
import "./App.css";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Main from "./components/Main";
import { ParallaxProvider } from "react-scroll-parallax";
import Loading from "./components/Loading";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulasikan waktu pemuatan data
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <ParallaxProvider>
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
        </ParallaxProvider>
      )}
    </>
  );
}

export default App;
