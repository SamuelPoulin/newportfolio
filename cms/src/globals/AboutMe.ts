import { GlobalConfig } from "payload/types";

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
  ],
};

export default AboutMe;
