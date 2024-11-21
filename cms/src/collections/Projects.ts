import { CollectionConfig } from "payload";

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
    {
      name: "rank",
      type: "number",
      unique: true,
    },
  ],
};

export default Projects;
