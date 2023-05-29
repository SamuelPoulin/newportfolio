import { CollectionConfig } from "payload/types";

const Skills: CollectionConfig = {
  slug: "skills",
  fields: [
    {
      name: "name",
      type: "text",
    },
    {
      name: "logo",
      type: "text",
    },
    {
      name: "experience",
      type: "text",
    },
  ],
};

export default Skills;
