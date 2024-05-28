import path from "path";

import { viteBundler } from "@payloadcms/bundler-vite";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { buildConfig } from "payload/config";

import Files from "./src/collections/Files";
import Media from "./src/collections/Media";
import Projects from "./src/collections/Projects";
import Skills from "./src/collections/Skills";
import Users from "./src/collections/Users";
import AboutMe from "./src/globals/AboutMe";
import HeaderAlert from "./src/globals/HeaderAlert";
import LandingPageDescription from "./src/globals/LandingPageDescription";

const isProduction = process.env.NODE_ENV === "production";

const mongoUsername = process.env.MONGO_USERNAME;
const mongoPassword = process.env.MONGO_PASSWORD;
const mongoDatabase = process.env.MONGO_DATABASE;

const mongoURL = `mongodb://${mongoUsername}:${mongoPassword}@mongo/${mongoDatabase}`;

export default buildConfig({
  serverURL: isProduction ? "https://samuelpoulin.ca" : "http://localhost:3001",
  admin: {
    bundler: viteBundler(),
    user: Users.slug,
  },
  db: mongooseAdapter({
    url: mongoURL,
    connectOptions: {
      authSource: "admin",
    },
  }),
  editor: lexicalEditor({}),
  collections: [Users, Media, Files, Projects, Skills],
  globals: [HeaderAlert, LandingPageDescription, AboutMe],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
});
