"use client";

import Hero from "./components/hero";
import { Suspense } from "react";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="min-h-screen pt-[107px] md:pt-[150px] lg:pt-[197px] flex flex-col">
      <Suspense>
        <div className="flex-1">
          <Hero />

          {/* <WhyPassSafe /> */}
          {/* <FAQ /> */}
        </div>
        <Footer />
      </Suspense>
    </main>
  );
}
