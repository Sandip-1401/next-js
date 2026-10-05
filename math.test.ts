import { add } from "./math";

test("add two numbers", () => {
   expect(add(2, 3)).toBe(5);
})