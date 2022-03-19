import { serve } from "https://deno.land/std@0.120.0/http/server.ts";
import { configure, renderFile } from "https://deno.land/x/eta@v1.12.3/mod.ts";
import * as messageService from "./services/messageService.js";

configure({
  views: `${Deno.cwd()}/views/`,
});

const responseDetails = {
  headers: { "Content-Type": "text/html;charset=UTF-8" },
};

const redirectTo = (path) => {
  return new Response(`Redirecting to ${path}.`, {
    status: 303,
    headers: {
      "Location": path,
    },
  });
};

const submit = async (request) => {
  const formData = await request.formData();
  const sender = formData.get("sender");
  const message = formData.get("message");

  await messageService.add(sender, message);
  return redirectTo("/");
};

const list = async (request) => {
  const data = {
    messages: await messageService.fetchBetween(),
  }
  return new Response(await renderFile("index.eta", data), responseDetails);
};

const handleRequest = async (request) => {
  if (request.method === "POST") {
    return await submit(request);
  } else {
    return await list(request);
  };
};

serve(handleRequest, { port: 7777 });