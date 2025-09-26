import client from "../../lib/client";
import DogGallery from "../DogGallery";

interface Params {
  params: { id: string };
}

// Fetch a single dog from Contentful
async function getDog(id: string) {
  const res = await client.getEntry(id);
  return res;
}

export default async function DogPage({ params }: Params) {
  // Await params to ensure it's resolved
  const { id } = await params;

  // Fetch the dog data using the resolved id
  const dog = await getDog(id);

  // Process the dog images
  const dogImages =
    Array.isArray(dog.fields.image) && dog.fields.image.length > 0
      ? (dog.fields.image as any[])
      : [];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">
        {String(dog.fields.name) || "Unnamed Dog"}
      </h1>

      <p className="mb-6">{String(dog.fields.description ?? "")}</p>

      {dogImages.length > 0 && <DogGallery images={dogImages} />}
    </div>
  );
}
