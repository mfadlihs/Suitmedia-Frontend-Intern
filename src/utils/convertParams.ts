type ConvertParamProps = (
  s: string | string[] | undefined
) => string | undefined;

export const convertParam: ConvertParamProps = (s) => {
  return s === "string"
    ? s
    : Array.isArray(s) && s.length > 0
    ? s[0]
    : undefined;
};
