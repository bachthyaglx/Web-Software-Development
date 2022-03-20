import { renderFile } from "https://deno.land/x/eta@v1.12.3/mod.ts";
import * as listService from "../services/listService.js";

const responseDetails = {
    headers: { "Content-Type": "text/html;charset=UTF-8" },
  };

const statistics = async (request) => {
    const data = {
      sum_list: await listService.countLists(),
      sum_item: await listService.countItems(),
    };
    return new Response(await renderFile("main.eta", data), responseDetails);
};

export { statistics }