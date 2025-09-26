// page.tsx or Home.tsx
import client from "./lib/client";
import DogLink from "./dogs/DogLink";
import { Dog } from "../types"; // same Dog type

async function getDogs(): Promise<Dog[]> {
  const res = await client.getEntries({ content_type: "dog" });

  return res.items.map((item) => ({
    sys: { id: item.sys.id },
    fields: {
      name: item.fields.name as string,
      description: item.fields.description as string | undefined,
      image: item.fields.image as Dog["fields"]["image"] | undefined,
    },
  }));
}

export default async function Home() {
  const dogs = await getDogs();
  return <DogLink dogs={dogs} />;
}
