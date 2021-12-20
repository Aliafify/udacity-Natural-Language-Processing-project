import "babel-polyfill";
import { handleSubm } from "../formHandler";
describe("Testing the submit functionality", () => {
  test("Testing the handleSubm() function", () => {
    expect(handleSubm).toBeDefined();
  });
});
