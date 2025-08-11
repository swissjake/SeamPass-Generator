import Footer from "../components/footer";
import Privacy from "../components/privacy";

export default function PrivacyPage(): JSX.Element {
  return (
    <main className="min-h-screen pt-[107px] md:pt-[150px] bg-white lg:pt-[197px] flex flex-col">
      <div className="flex-1">
        <Privacy />
      </div>
      <Footer />
    </main>
  );
}
