import { executeQuery } from "../database/database.js";
  
  const create = async (name) => {
    await executeQuery("INSERT INTO shopping_lists (name) VALUES ($1);", name);
  };
  
  const updateFalse = async (id) => {
    await executeQuery("UPDATE shopping_lists SET active = false WHERE id = $1;", id);
  };

  const viewTrue = async () => {
    let result = await executeQuery("SELECT * FROM shopping_lists WHERE active = true;");
    return result.rows;
  };

  const countLists = async () => {
    let result = await executeQuery("SELECT COUNT(*) AS count FROM shopping_lists;");
    return result.rows[0].count;
  };
  
  const countItems = async () => {
    let result = await executeQuery("SELECT COUNT(*) AS count FROM shopping_list_items;");
    return result.rows[0].count;
  };

export { create, updateFalse, viewTrue, countLists, countItems };
