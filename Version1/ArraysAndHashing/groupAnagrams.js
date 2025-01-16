// https://leetcode.com/problems/group-anagrams/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

var groupAnagrams = function (strs) {
  const anagramMap = new Map();

  for (let i = 0; i < strs.length; i++) {
    const sortedString = strs[i].split("").sort().join("");

    if (!anagramMap.has(sortedString)) {
      anagramMap.set(sortedString, []);
    }

    anagramMap.get(sortedString).push(strs[i]);
  }

  return Array.from(anagramMap.values());
};
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

var groupAnagrams2 = function (strs) {
  const anagramMap = {};
  for (let i = 0; i < strs.length; i++) {
    const sortedString = strs[i].split("").sort().join("");
    console.log("sortedString: ", sortedString);
    if (!anagramMap[sortedString]) {
      anagramMap[sortedString] = [];
    }

    anagramMap[sortedString].push(strs[i]);
  }
  return Object.values(anagramMap);
};

const validAnagram = (s, t) => {
  const wordS = {},
    wordT = {};

  if (s.length !== t.length) {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    if (!wordS[s[i]]) {
      wordS[s[i]] = 1;
    } else {
      wordS[s[i]]++;
    }

    if (!wordT[t[i]]) {
      wordT[t[i]] = 1;
    } else {
      wordT[t[i]]++;
    }
  }

  for (let letter in wordS) {
    if (wordS[letter] !== wordT[letter]) {
      return false;
    }
  }
  return true;
};

console.log("ans=", validAnagram("eat", "tae"));

var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  return s.split("").sort().join("") === t.split("").sort().join("");
};
