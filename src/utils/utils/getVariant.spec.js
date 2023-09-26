import { getVariant } from "./getVariant";

describe("getVariant()", () => {
  it("should return small variant", () => {
    expect(getVariant("sm")).toMatchInlineSnapshot(`"small"`);
  });

  it("should return medium variant", () => {
    expect(getVariant("md")).toMatchInlineSnapshot(`"medium"`);
  });

  it("should return large variant", () => {
    expect(getVariant("lg")).toMatchInlineSnapshot(`"large"`);
  });

  // OR loop through tests - https://jestjs.io/docs/api#testeachtablename-fn-timeout
  // it.each(["sm", "md", "lg"])(
  //   "should get the correct variant for %s",
  //   (variant) => {
  //     expect(getVariant(variant)).toMatchSnapshot();
  //   }
  // );
});
