import { isGoogStaplesV2 } from "./isGoogStaples.js";

describe("Expecting true", () => {
  test("Input is '()'", () => {
    expect(isGoogStaplesV2("()")).toBe(true);
  });
  test("Input is '(())'", () => {
    expect(isGoogStaplesV2("(())")).toBe(true);
  });
  test("Input is '(()())'", () => {
    expect(isGoogStaplesV2("(()())")).toBe(true);
  });
  test("Input is '((()))'", () => {
    expect(isGoogStaplesV2("((()))")).toBe(true);
  });
  test("Input is '()()()'", () => {
    expect(isGoogStaplesV2("()()()")).toBe(true);
  });
  test("Input is '(((())))'", () => {
    expect(isGoogStaplesV2("(((())))")).toBe(true);
  });
  test("Input is '()(()())'", () => {
    expect(isGoogStaplesV2("()(()())")).toBe(true);
  });
  test("Input is '((())())()'", () => {
    expect(isGoogStaplesV2("((())())()")).toBe(true);
  });
});

describe("Expecting false", () => {
  test("Input is ')(())('", () => {
    expect(isGoogStaplesV2(")(")).toBe(false);
  });
  test("Input is '()('", () => {
    expect(isGoogStaplesV2("()(")).toBe(false);
  });
  test("Input is '(()'", () => {
    expect(isGoogStaplesV2("(()")).toBe(false);
  });
  test("Input is '())'", () => {
    expect(isGoogStaplesV2("())")).toBe(false);
  });
  test("Input is '(())))'", () => {
    expect(isGoogStaplesV2("(())))")).toBe(false);
  });
  test("Input is '((())())())'", () => {
    expect(isGoogStaplesV2("((())())())")).toBe(false);
  });
  test("Input is ')(()('", () => {
    expect(isGoogStaplesV2(")(()(")).toBe(false);
  });
});
