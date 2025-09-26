import client from "./lib/client";
import DogLink from "./dogs/DogLink";

async function getDogs() {
  const res = await client.getEntries({ content_type: "dog" });
  return res.items;
}

export default async function Home() {
  const dogs = await getDogs(); // server-side fetch
  return <DogLink dogs={dogs} />;
}
