import { CollectionConfig } from "payload";

const Files: CollectionConfig = {
  slug: "files",
  access: {
    read: () => true,
  },
  upload: {
    staticDir: "files",
    mimeTypes: ["*"],
  },
  fields: [
    {
      name: "date",
      type: "date",
    },
  ],
};

export default Files;
