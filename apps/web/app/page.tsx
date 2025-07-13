"use client";

import { Tabs, PasswordGenerator } from "@seampass/ui";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className="max-w-4xl mx-auto p-6">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">
            SeamPass Password Generator
          </h1>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <Tabs defaultValue="random" className="w-full">
              <PasswordGenerator />
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  );
}
