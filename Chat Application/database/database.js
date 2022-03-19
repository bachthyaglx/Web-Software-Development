import { Pool } from "https://deno.land/x/postgres@v0.14.3/mod.ts";
const CONCURRENT_CONNECTIONS = 2;
let connectionPool;
if (Deno.env.get("DATABASE_URL")) {
  connectionPool = new Pool(Deno.env.get("DATABASE_URL"), CONCURRENT_CONNECTIONS);
} else {
  connectionPool = new Pool({
    hostname: "ec2-54-220-195-236.eu-west-1.compute.amazonaws.com",
    database: "d1m4a6gmp5vgd7",
    user: "qghtkvpyjnhnpw",
    password: "d098aacfb0b4d20656e193d28bc34353f3dcbe49ace70ecbd705a5b5369388ae",
    port: "5432",
  }, CONCURRENT_CONNECTIONS);
}

const executeQuery = async (query, ...args) => {
  const response = {};
  let client;

  try {
    client = await connectionPool.connect();
    const result = await client.queryObject(query, ...args);
    if (result.rows) {
      response.rows = result.rows;
    }
  } catch (e) {
    response.error = e;
  } finally {
    if (client) {
      try {
        await client.release();
      } catch (e) {
        console.log("Unable to release database connection.");
        console.log(e);
      }
    }
  }

  return response;
};

export { executeQuery };
