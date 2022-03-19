import { executeQuery } from "../database/database.js";

const add = async (sender, message) => {
  await executeQuery(
    "INSERT INTO messages (sender, message) VALUES ($1, $2);",
    sender,
    message,
  );
};

const fetchBetween = async () => {
  let result = await executeQuery("SELECT * FROM (SELECT * FROM messages ORDER BY id DESC LIMIT 5)SQ ORDER BY id ASC;");
  return result.rows;
};

export { add, fetchBetween };