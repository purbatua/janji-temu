// import { betterAuth } from "better-auth";
// import { Pool } from "pg";

// export const auth = betterAuth({
//   database: new Pool({
//     // connection options
//   })
// })

// import { betterAuth } from "better-auth";
// import { prismaAdapter } from "better-auth/adapters/prisma";
// import { PrismaClient } from "@/generated/prisma/client";

// const prisma = new PrismaClient();
// export const auth = betterAuth({
//   database: prismaAdapter(prisma, {
//     provider: "postgresql", // or "mysql", "postgresql", ...etc
//   }),
//   emailAndPassword: {  
//     enabled: true,
//     autoSignIn: true,
//   },
//   account: {
//     accountLinking: {
//       enabled: true,
//       trustedProviders: ["google"]
//     }
//   },
//   // socialProviders: { 
//   //   google: { 
//   //     clientId: process.env.GITHUB_CLIENT_ID, 
//   //     clientSecret: process.env.GITHUB_CLIENT_SECRET, 
//   //   } 
//   // },
// });


import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "../drizzle";
import * as schema from "../drizzle/schema";

const CORS = (process.env.CORS_ALLOW_LIST || "").split(",") || [];

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: {
      ...schema,
      user: schema.users,
    },
    //if all of them are just using plural form, you can just pass the option below
    usePlural: true,
  }),
  trustedOrigins: CORS,
  emailAndPassword: {  
    enabled: true,
    autoSignIn: true,
  },
  account: {
    accountLinking: {
      enabled: true,
      trustedProviders: ["google"]
    }
  },
  
  // socialProviders: { 
  //   google: { 
  //     clientId: process.env.GOOGLE_CLIENT_ID, 
  //     clientSecret: process.env.GOOGLE_CLIENT_SECRET, 
  //   } 
  // },
  rateLimit: {
    window: 10, // time window in seconds
    max: 100, // max requests in the window
  },
  session: {
    cookieCache: {
      enabled: true,
      maxAge: 5 * 60, // Cache duration in seconds
    },
  },
});
