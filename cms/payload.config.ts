import path from "path";
import { buildConfig } from "payload/config";

import Projects from "./src/collections/Projects";
import Skills from "./src/collections/Skills";
import Users from "./src/collections/Users";
import LandingPageDescription from "./src/globals/LandingPageDescription";
import HeaderAlert from "./src/globals/HeaderAlert";

export default buildConfig({
  serverURL: "http://localhost:3001",
  admin: {
    user: Users.slug,
  },
  collections: [Users, Projects, Skills],
  globals: [HeaderAlert, LandingPageDescription],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
});
