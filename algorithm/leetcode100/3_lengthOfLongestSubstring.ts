function lengthOfLongestSubstring(s: string): number {
  let maxLen = 0,
    l = s.length;
  if (l <= 1) return l;
  let right = 0;
  for (let i = 0; i < l && right < l; i++) {
    // 没找到
    while (!s.slice(i, right).includes(s[right]) && right < l) {
      console.log(s[right]);
      right++;
    }
    console.log(i, right, s.slice(i, right));
    maxLen = Math.max(right - i, maxLen);
  }
  return maxLen;
}
let s1 = "aab",
  s2 = "abcabcbb",
  s3 = "pwwkew";
console.log(lengthOfLongestSubstring(s2));
