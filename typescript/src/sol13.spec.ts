function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>();
  for (const str of strs) {
    const count = Array(26).fill(0);
    for (const c of str) {
      count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    const key = count.join('#');
    if (map.has(key)) {
      map.get(key)?.push(str);
    } else {
      map.set(key, [str]);
    }
  }
  return [...map.values()];
};

describe('groupAnagrams', () => {
  it('case 1', () => {
    const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
    const output = [["bat"],["nat","tan"],["ate","eat","tea"]];
    for (const a of groupAnagrams(strs)) {
      // this is only to test, there could be a better way to test for unordered array equality
      expect(output).toContainEqual(a.sort());
    }
  });
});
