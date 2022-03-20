import { renderFile } from "https://deno.land/x/eta@v1.12.3/mod.ts";
import * as itemService from "../services/itemService.js";
import * as requestUtils from "../utils/requestUtils.js";

const responseDetails = {
  headers: { "Content-Type": "text/html;charset=UTF-8" },
};

const viewItems = async (request) => {
  const url = new URL(request.url);
  const urlParts = url.pathname.split("/");
  const data = {
    list: await itemService.list(urlParts[2]),
    items: await itemService.items(urlParts[2]),
  };
  return new Response(await renderFile("item.eta", data), responseDetails);
};

const addItems = async (request) => {
  const url = new URL(request.url);
  const urlParts = url.pathname.split("/");
  const formData = await request.formData();
  const name = formData.get("name1");
  await itemService.create(urlParts[2],name);
  return requestUtils.redirectTo(`/lists/${urlParts[2]}`);
  
};

const updateTrue = async (request) => {
  const url = new URL(request.url);
  const urlParts = url.pathname.split("/");
  await itemService.updateState(urlParts[4]);
  return requestUtils.redirectTo(`/lists/${urlParts[2]}`);
};

export { viewItems, addItems, updateTrue };