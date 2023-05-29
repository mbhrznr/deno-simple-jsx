import { serve } from "$deno:http/server.ts";
import render from "$ixalan/jsx-runtime/render.ts";
import page from "$ixalan/pages/page.tsx";

const port = 8080;

/** serve any incoming requests */
await serve(
  () => {
    const headers = new Headers();

    headers.set("content-type", "text/html; charset=utf-8");

    return new Response(render(page()), { headers });
  },
  { port }
);
