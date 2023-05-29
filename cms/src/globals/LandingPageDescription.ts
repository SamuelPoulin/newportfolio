import { GlobalConfig } from "payload/types";

const LandingPageDescription: GlobalConfig = {
  slug: "landing-page-description",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "description",
      type: "text",
    },
  ],
};

export default LandingPageDescription;
