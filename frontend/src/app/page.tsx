import Footer from "@/components/layout/Footer";

export default async function HomePage() {
  return (
    <>
      <main>
        <section className="bg-white">
          <div className="layout relative flex min-h-screen flex-col items-center justify-start py-12 h-full">
            Content
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
