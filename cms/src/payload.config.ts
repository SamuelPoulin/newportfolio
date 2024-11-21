// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import Users from './collections/Users'
import Media from './collections/Media'
import Files from './collections/Files'
import Projects from './collections/Projects'
import Skills from './collections/Skills'
import HeaderAlert from './globals/HeaderAlert'
import LandingPageDescription from './globals/LandingPageDescription'
import AboutMe from './globals/AboutMe'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const mongoUsername = process.env.MONGO_USERNAME;
const mongoPassword = process.env.MONGO_PASSWORD;
const mongoDatabase = process.env.MONGO_DATABASE;
const mongoURL = `mongodb://${mongoUsername}:${mongoPassword}@mongo/${mongoDatabase}` || '';

const payloadSecret = process.env.PAYLOAD_SECRET || '';

export default buildConfig({
  serverURL: "https://samuelpoulin.ca",
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Files, Projects, Skills],
  globals: [HeaderAlert, LandingPageDescription, AboutMe],
  editor: lexicalEditor(),
  secret: payloadSecret,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(dirname, "generated-schema.graphql"),
  },
  db: mongooseAdapter({
    url: mongoURL,
    connectOptions: {
      authSource: "admin"
    }
  }),
  sharp,
})
