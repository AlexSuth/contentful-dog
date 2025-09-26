// types.ts
export type ContentfulImage = {
  fields: {
    file: {
      url: string;
    };
  };
};

export type Dog = {
  sys: {
    id: string;
  };
  fields: {
    name: string;
    description?: string;
    image?: ContentfulImage[];
  };
};
