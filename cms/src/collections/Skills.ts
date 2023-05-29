import { CollectionConfig } from "payload/types";

const Skills: CollectionConfig = {
  slug: "skills",
  admin: {
    useAsTitle: "name",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "name",
      type: "text",
    },
    {
      name: "logo",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "experience",
      type: "text",
    },
    {
      name: "showcase",
      type: "checkbox",
      defaultValue: true,
    },
  ],
};

export default Skills;
