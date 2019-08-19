```js
/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
  const r = [];
  words.forEach(word => {
    const Chars = [...chars];
    const W = [...word];
    if (W.length > Chars.length) {
      return;
    }
    console.log("word", word);
    const isRem = W.every((w, idx) => {
      const i = Chars.indexOf(w);
      if (i > -1) {
        Chars.splice(i, 1);
        return true;
      } else {
        return false;
      }
    });
    if (isRem) {
      r.push(word);
    }
  });
  console.log("r", r);
  return r.reduce((prev, cur) => {
    return (prev = Number(prev) + cur.length);
  }, "");
};

console.log(countCharacters(["cat", "bt", "hat", "tree"], "atach"));
console.log(countCharacters(["hello", "world", "leetcode"], "welldonehoneyr"));
```
