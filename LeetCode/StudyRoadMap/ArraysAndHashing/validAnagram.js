/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function (s, t) {
    // hash map with key as char and value as count
    // for s and t

    if (s.length !== t.length) return false;

    let [sMap, tMap] = [new Map(), new Map()];

    for (let i = 0; i < s.length; i++) {
        // count the occurance of each char in s and t
        sMap.set(s[i], sMap.get(s[i]) + 1 || 1);
        tMap.set(t[i], tMap.get(t[i]) + 1 || 1);
    }

    // compare the maps
    for (let [key, value] of sMap) {
        if (value !== tMap.get(key)) return false;
    }
    return true;


};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("car", "rat"));

// s = "anagram", t = "nagaram" => true
// aaangrm
