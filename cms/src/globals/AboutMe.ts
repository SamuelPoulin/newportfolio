import { GlobalConfig } from "payload";

const AboutMe: GlobalConfig = {
  slug: "about-me",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "picture",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "opener",
      type: "text",
    },
    {
      name: "description",
      type: "text",
    },
    {
      name: "resume",
      type: "upload",
      relationTo: "files",
    },
  ],
};

export default AboutMe;
