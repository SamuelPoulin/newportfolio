import { GlobalConfig } from "payload";

const HeaderAlert: GlobalConfig = {
  slug: "header-alert",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "alert",
      type: "text",
    },
    {
      name: "emojiLeft",
      type: "text",
    },
    {
      name: "emojiRight",
      type: "text",
    },
  ],
};

export default HeaderAlert;
