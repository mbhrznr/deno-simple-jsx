/** enrich props with (optional) children. */
type PropsWithChildren<P = Record<never, never>> = {
  children?: JSX.Element[];
} & P;

/** function components w/ (optional) children. */
type FC<P = Record<never, never>> = (
  props: PropsWithChildren<P>
) => JSX.Element;

/** void function components w/o children. */
type VFC<P = Record<never, never>> = (props: P) => JSX.Element;

/** get keys of passed object/map */
type GetKeys<U> = U extends Record<infer K, unknown> ? K : never;

/** transform union to intersection */
type UnionToIntersection<U extends Record<never, never>> = {
  [K in GetKeys<U>]: U extends Record<K, infer T> ? T : never;
};

/** jsx namespace. */
declare namespace JSX {
  type Element = {
    props: {
      children?: JSX.Element[];
      [key: string]: unknown;
    };
    tag: FC | VFC | string;
  };

  type IntrinsicElements = UnionToIntersection<
    | { [H in keyof HTMLElementTagNameMap]: Partial<HTMLElementTagNameMap[H]> }
    | { [S in keyof SVGElementTagNameMap]: Partial<SVGElementTagNameMap[S]> }
  >;

  type Node = JSX.Element | JSX.Element[];
}
