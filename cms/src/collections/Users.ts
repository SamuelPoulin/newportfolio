import { CollectionConfig } from "payload";

const Users: CollectionConfig = {
  slug: "users",
  auth: {
    maxLoginAttempts: 10,
    lockTime: 3600000,
  },
  admin: {
    useAsTitle: "email",
  },
  access: {
    read: () => true,
  },
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
};

export default Users;
