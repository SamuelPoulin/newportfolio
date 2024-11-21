import { GlobalConfig } from "payload";

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
