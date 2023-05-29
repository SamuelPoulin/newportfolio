import path from "path";
import { buildConfig } from "payload/config";

import Media from "./src/collections/Media";
import Projects from "./src/collections/Projects";
import Skills from "./src/collections/Skills";
import Users from "./src/collections/Users";
import HeaderAlert from "./src/globals/HeaderAlert";
import LandingPageDescription from "./src/globals/LandingPageDescription";

export default buildConfig({
  serverURL: "http://localhost:3001",
  admin: {
    user: Users.slug,
  },
  collections: [Users, Media, Projects, Skills],
  globals: [HeaderAlert, LandingPageDescription],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
});
