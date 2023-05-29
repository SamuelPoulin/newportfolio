import { CollectionConfig } from "payload/types";

const Projects: CollectionConfig = {
  slug: "projects",
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
      name: "description",
      type: "text",
    },
    {
      name: "picture",
      type: "upload",
      relationTo: "media",
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
      type: "relationship",
      relationTo: "skills",
      hasMany: true,
    },
  ],
};

export default Projects;
