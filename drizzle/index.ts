// import { drizzle } from 'drizzle-orm/node-postgres';

// You can specify any property from the node-postgres connection options
// export const db = drizzle({ 
//   connection: { 
//     connectionString: process.env.DATABASE_URL!,
//     // ssl: true
//   }
// });


import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

const connectionString = process.env.DATABASE_URL || "";

const client = postgres(connectionString, { prepare: false })
export const db = drizzle(client);