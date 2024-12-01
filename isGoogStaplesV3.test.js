import { isGoogStaplesV3 } from "./isGoogStaples.js";

describe("Expecting true", () => {
  test("Input is '()'", () => {
    expect(isGoogStaplesV3("()")).toBe(true);
  });
  test("Input is '(())'", () => {
    expect(isGoogStaplesV3("(())")).toBe(true);
  });
  test("Input is '(()())'", () => {
    expect(isGoogStaplesV3("(()())")).toBe(true);
  });
  test("Input is '((()))'", () => {
    expect(isGoogStaplesV3("((()))")).toBe(true);
  });
  test("Input is '()()()'", () => {
    expect(isGoogStaplesV3("()()()")).toBe(true);
  });
  test("Input is '(((())))'", () => {
    expect(isGoogStaplesV3("(((())))")).toBe(true);
  });
  test("Input is '()(()())'", () => {
    expect(isGoogStaplesV3("()(()())")).toBe(true);
  });
  test("Input is '((())())()'", () => {
    expect(isGoogStaplesV3("((())())()")).toBe(true);
  });
});

describe("Expecting false", () => {
  test("Input is ')(())('", () => {
    expect(isGoogStaplesV3(")(")).toBe(false);
  });
  test("Input is '()('", () => {
    expect(isGoogStaplesV3("()(")).toBe(false);
  });
  test("Input is '(()'", () => {
    expect(isGoogStaplesV3("(()")).toBe(false);
  });
  test("Input is '())'", () => {
    expect(isGoogStaplesV3("())")).toBe(false);
  });
  test("Input is '(())))'", () => {
    expect(isGoogStaplesV3("(())))")).toBe(false);
  });
  test("Input is '((())())())'", () => {
    expect(isGoogStaplesV3("((())())())")).toBe(false);
  });
  test("Input is ')(()('", () => {
    expect(isGoogStaplesV3(")(()(")).toBe(false);
  });
});
