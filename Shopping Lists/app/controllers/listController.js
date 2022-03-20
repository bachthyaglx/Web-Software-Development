import { renderFile } from "https://deno.land/x/eta@v1.12.3/mod.ts";
import * as listService from "../services/listService.js";
import * as requestUtils from "../utils/requestUtils.js";

const responseDetails = {
  headers: { "Content-Type": "text/html;charset=UTF-8" },
};

const addList = async (request) => {
  const formData = await request.formData();
  const name = formData.get("name");
  await listService.create(name);
  return requestUtils.redirectTo("/lists");
};

const updateFalse = async (request) => {
  const url = new URL(request.url);
  const urlParts = url.pathname.split("/");
  await listService.updateFalse(urlParts[2]);
  return requestUtils.redirectTo("/lists");
};

const viewList = async (request) => {
  const data = {
    lists: await listService.viewTrue(),
  };
  return new Response(await renderFile("list.eta", data), responseDetails);
};

export { addList, updateFalse, viewList };