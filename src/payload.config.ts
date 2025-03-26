import path from 'path'

import { payloadCloud } from '@payloadcms/plugin-cloud'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { lexicalEditor} from '@payloadcms/richtext-lexical';
import { buildConfig } from 'payload/config'
import seoPlugin from "@payloadcms/plugin-seo"

import Users from './collections/Users'
import Pages from './collections/Pages'
import Media from './collections/Media'
import Header from './globals/Header'
import Footer from './globals/Footer'
import Packages from './collections/Packages';

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL,
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),

  },
  editor: lexicalEditor({
  }),
  collections: [
    Users,
    Media,
    Pages,
    Packages
  ],
  globals:[
    Header,
    Footer,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [
    payloadCloud(),
    seoPlugin({
      collections: [
        'pages',
      ],
      generateTitle: () => '',
      generateDescription: () => '',
      generateURL: () => '',
      tabbedUI:true,
      fields:[
        {
          name:'canonicalUrl',
          type:'text',
        }
      ]
    })
  ],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
})
