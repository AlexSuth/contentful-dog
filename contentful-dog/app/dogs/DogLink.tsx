import Image from "next/image";
import Link from "next/link";

type ContentfulImage = {
  fields: {
    file: {
      url: string;
    };
  };
};

type Dog = {
  sys: {
    id: string;
  };
  fields: {
    name: string;
    description?: string;
    image?: ContentfulImage[];
  };
};

type DogLinkProps = {
  dogs: Dog[];
};

export default function DogLink({ dogs }: DogLinkProps) {
  return (
    <main className="p-8 grid gap-6 md:grid-cols-3">
      {dogs.map((dog) => {
        const { name, description, image } = dog.fields;
        const firstImageUrl =
          image?.[0]?.fields?.file?.url
            ? "https:" + image[0].fields.file.url
            : null;

        return (
          <div key={dog.sys.id} className="rounded-xl shadow-md p-4">
            {firstImageUrl && (
              <Link href={`/dogs/${dog.sys.id}`}>
                <Image
                  src={firstImageUrl}
                  alt={name}
                  width={400}
                  height={300}
                  className="rounded-lg cursor-pointer"
                />
              </Link>
            )}
            <h2 className="text-xl font-bold mt-2">{name}</h2>
            {description && <p className="text-gray-600 mt-1">{description}</p>}
          </div>
        );
      })}
    </main>
  );
}
