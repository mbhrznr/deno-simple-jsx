export type Awaitable<T> = T | Promise<T>;

export type Handler = {
  [key in Method]?: RouteFunction;
};

export type ActionFunction = (
  request: Request,
  response: Response
) => Awaitable<Record<string, unknown> | Response>;

export type LoadFunction = (
  request: Request,
  response: Response
) => Awaitable<Record<string, unknown>>;

export type PageProps<
  L extends LoadFunction | never = never,
  A extends ActionFunction | never = never
> = {
  action?: Awaited<ReturnType<A>>;
  load: Awaited<ReturnType<L>>;
};

export type Method =
  | "delete"
  | "get"
  | "head"
  | "options"
  | "patch"
  | "post"
  | "put";

export type RouteFunction = (
  request: Request,
  response: Response
) => Awaitable<Response>;
