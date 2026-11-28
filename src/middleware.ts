
// src/middleware.ts
import routes from "virtual:file-routes";
import { createAPIHandler } from "filesystem-routing/api";

export default [createAPIHandler(routes)];

type Middleware = (
  request: Request,
  next: (request?: Request) => Promise<Response>
) => Response | Promise<Response>;