import { getNestedArray } from "@/lib/getNestedArray";

import ChaptersList from "@/components/ChaptersList";
import Footer from "@/components/layout/Footer";

async function getDocumentData() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const response = await fetch(`${apiUrl}/data`);
  const document = response.json();
  return document;
}

export default async function HomePage() {
  const data = await getDocumentData();
  const normalizedData = getNestedArray(data.content.document);

  return (
    <>
      <main>
        <section className="bg-white">
          <div className="layout relative flex min-h-screen flex-col items-center justify-start py-4 h-full">
            <ChaptersList
              itemsList={normalizedData}
              items={data.content.document}
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
