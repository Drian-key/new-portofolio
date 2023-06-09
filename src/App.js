import React, { Suspense } from "react";
import "./App.css";

import { ParallaxProvider } from "react-scroll-parallax";
import Loading from "./components/Loading";

const Contact = React.lazy(() => import("./components/Contact"));
const Header = React.lazy(() => import("./components/Header"));
const Main = React.lazy(() => import("./components/Main"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
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
    </Suspense>
  );
}

export default App;
