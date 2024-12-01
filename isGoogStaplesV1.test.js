import { isGoogStaplesV1 } from "./isGoogStaples.js";

describe("Expecting true", () => {
  test("Input is '()'", () => {
    expect(isGoogStaplesV1("()")).toBe(true);
  });
  test("Input is '(())'", () => {
    expect(isGoogStaplesV1("(())")).toBe(true);
  });
  test("Input is '(()())'", () => {
    expect(isGoogStaplesV1("(()())")).toBe(true);
  });
  test("Input is '((()))'", () => {
    expect(isGoogStaplesV1("((()))")).toBe(true);
  });
  test("Input is '()()()'", () => {
    expect(isGoogStaplesV1("()()()")).toBe(true);
  });
  test("Input is '(((())))'", () => {
    expect(isGoogStaplesV1("(((())))")).toBe(true);
  });
  test("Input is '()(()())'", () => {
    expect(isGoogStaplesV1("()(()())")).toBe(true);
  });
  test("Input is '((())())()'", () => {
    expect(isGoogStaplesV1("((())())()")).toBe(true);
  });
});

describe("Expecting false", () => {
  test("Input is ')(())('", () => {
    expect(isGoogStaplesV1(")(")).toBe(false);
  });
  test("Input is '()('", () => {
    expect(isGoogStaplesV1("()(")).toBe(false);
  });
  test("Input is '(()'", () => {
    expect(isGoogStaplesV1("(()")).toBe(false);
  });
  test("Input is '())'", () => {
    expect(isGoogStaplesV1("())")).toBe(false);
  });
  test("Input is '(())))'", () => {
    expect(isGoogStaplesV1("(())))")).toBe(false);
  });
  test("Input is '((())())())'", () => {
    expect(isGoogStaplesV1("((())())())")).toBe(false);
  });
  test("Input is ')(()('", () => {
    expect(isGoogStaplesV1(")(()(")).toBe(false);
  });
});
