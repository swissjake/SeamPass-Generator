import Hero from "./components/hero";
import Footer from "./components/footer";
import { JSX } from "react";

export default function Home(): JSX.Element {
  return (
    <main className="min-h-screen pt-[107px] md:pt-[150px] bg-white lg:pt-[197px] flex flex-col">
      <div className="flex-1">
        <Hero />
      </div>
      <Footer />
    </main>
  );
}
