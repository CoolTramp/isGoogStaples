// Heuristic version
export function isGoogStaplesV1(str) {
  if (str.length % 2 !== 0) return false;

  let prev = 0,
    i,
    shift = 0;
  const list = [];

  for (i = 0; i < str.length; i++) {
    list[i - shift] = str[i] === "(" ? 0 : 1;
    prev = list[i - 1 - shift];

    if (prev === 0 && list[i - shift] === 1) {
      list.splice(i - 1 - shift, 2);
      shift += 2;
    }
  }

  return !list.length;
}

// This is not work. Maybe that will can be fix
export function isGoogStaplesV2(str) {
  if (str.length % 2 !== 0) return false;

  let goodStaples = 0;
  const list = new Int8Array(str.length);

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ")") list[i - goodStaples] = 1;

    if (
      i > 0 &&
      list[i - goodStaples - 1] === 0 &&
      list[i - goodStaples] === 1
    ) {
      goodStaples += 2;
    }
  }

  return str.length - goodStaples === 0;
}

// Stack version
export function isGoogStaplesV3(str) {
  if (str.length % 2 !== 0) return false;

  const stack = [];

  for (let char of str) {
    console.log(stack);
    if (char === "(") {
      stack.push(char);
    } else if (char === ")") {
      if (stack.length === 0) {
        return false;
      }
      stack.pop();
    }
  }

  return stack.length === 0;
}
