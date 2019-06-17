const ENV = process.env.NODE_ENV;
if (
  ENV !== "production" &&
  ENV !== "test" &&
  typeof console !== "undefined" &&
  console.warn &&
  typeof window !== "undefined"
) {
  // tslint:disable-next-line:no-console
  console.warn(
    "You are using a whole package of antd-mobile, " +
      "please use https://www.npmjs.com/package/babel-plugin-import to reduce app bundle size."
  );
}

export { default as Button } from "./button/index";
export { default as WingBlank } from "./wingBlank/index";
export { default as WhiteSpace } from "./whiteSpace/index";
