function isValid(s: string): boolean {
  let l = s.length;
  let stack = [];
  const map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  for (let i = 0; i < l; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(s[i]);
    } else {
      let upper = stack.pop();
      if (upper !== map[s[i]]) {
        return false;
      }
    }
  }
  return true;
}
