/**
 * @param {string} s
 * @return {string}
 */
/**
 * @param {string} s
 * @return {string}
 */
function is_Palindrome(str1) {
    var rev = str1.split("").reverse().join("");
    return str1 == rev;
}
var longestPalindrome = function(s) {
    let n = s.length; // calculating size of string
    var isPalindrome = is_Palindrome(s);
    if(isPalindrome) return s;
    let maxLength = 1,start=0;
    let low, high;
    for (let i = 0; i < n; i++) {
        low = i - 1;
        high = i + 1;
        while ( high < n && s[high] == s[i]) //increment 'high'                                
            high++;
      
        while ( low >= 0 && s[low] == s[i]) // decrement 'low'                
            low--;
      
        while (low >= 0 && high < n && s[low] == s[high]){
            low--;
            high++;
        }
  
        let length = high - low - 1;
        if (maxLength < length) {
            maxLength = length;
            start=low+1;
        }
    }
      
    // document.write("Longest palindrome substring is: ");
    // document.write();
    return s.substring(start,maxLength+start);
}

