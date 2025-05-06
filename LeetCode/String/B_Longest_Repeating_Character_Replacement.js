/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

// https://leetcode.com/problems/longest-repeating-character-replacement/ 

var characterReplacement = function(s, k) {
    let left = 0
    let maxCharCount = 0
    let maxLen = 0;
    const visited = {}
  
    for (let right = 0; right < s.length; right++) {
      const char = s[right]
      visited[char] = visited[char] ? visited[char] + 1 : 1
  
      if (visited[char] > maxCharCount) maxCharCount = visited[char] // maxCharCount = Math.max(maxCharCount, visited[char]);
  
      if (right - left + 1 - maxCharCount > k) {
        visited[s[left]]--
        left++
      }
      
      maxLen = Math.max(maxLen, right - left + 1)
    }
  
    return maxLen
  }