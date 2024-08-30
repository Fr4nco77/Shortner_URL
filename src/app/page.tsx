import Top from "@/components/generics/top";
import Navbar from "@/components/navbar/navbar";

export default function Home() {
  return (
    <main className="relative flex min-h-screen w-full flex-col">
      <Navbar />
      <Top
        title={
          <>
            Build stronger
            <br />
            digital connections
          </>
        }
        description="Use our URL shortener, QR Codes, and landing pages to engage your
              audience and connect them to the right information. Build, edit,
              and track everything inside the Bitly Connections
              Platform."
        image="/landing-top.png"
        alt="Illustration of a woman with a cup of coffee, looking at her phone."
        to="/princing"
      />
    </main>
  );
}
