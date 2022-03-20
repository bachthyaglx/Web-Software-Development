import { executeQuery } from "../database/database.js";

const items = async (shopping_list_id) => {
  let result = await executeQuery("SELECT * FROM shopping_list_items WHERE shopping_list_id = $1 ORDER BY collected ASC, name;", shopping_list_id);
  return result.rows;
}; 

const list = async (id) => {
  let result = await executeQuery("SELECT * FROM shopping_lists WHERE id = $1;", id);
  return result.rows;
}; 

const create = async (shopping_list_id, name) => {
  await executeQuery("INSERT INTO shopping_list_items (shopping_list_id,name) VALUES ($1,$2);", shopping_list_id, name);
};

const updateState = async (id) => {
  await executeQuery("UPDATE shopping_list_items SET collected = true WHERE id = $1;", id);
};

export { items, list, create, updateState };