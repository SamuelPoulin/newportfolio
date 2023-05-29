import { CollectionConfig } from "payload/types";

const Projects: CollectionConfig = {
  slug: "projects",
  fields: [
    {
      name: "name",
      type: "text",
    },
    {
      name: "description",
      type: "text",
    },
    {
      name: "githubUrl",
      type: "text",
    },
    {
      name: "url",
      type: "text",
    },
    {
      name: "skills",
      type: "array",
      fields: [
        {
          name: "name",
          type: "text",
        },
      ],
    },
  ],
};

export default Projects;
