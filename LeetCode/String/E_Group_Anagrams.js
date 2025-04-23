/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let hash = {}

    strs.forEach(str => {
        let letters = str.split('').sort();
        hash[letters] ? hash[letters].push(str) : hash[letters] = [str];
    })

    return Object.values(hash);

    // const keys = Object.keys(hash);
    // const values = keys.map((v) => { return hash[v] });
    // return values;
};