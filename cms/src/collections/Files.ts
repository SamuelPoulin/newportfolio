import { CollectionConfig } from "payload/types";

const Files: CollectionConfig = {
  slug: "files",
  access: {
    read: () => true,
  },
  upload: {
    staticURL: "/files",
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
