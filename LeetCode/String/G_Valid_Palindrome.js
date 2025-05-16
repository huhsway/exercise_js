/**
 * 주어진 문자열이 회문(palindrome)인지 확인합니다.
 * 영숫자(alphanumeric) 문자만 고려하며 대소문자는 무시합니다.
 * @param {string} s 입력 문자열
 * @returns {boolean} 회문이면 true, 아니면 false
 */

// https://leetcode.com/problems/valid-palindrome/

var isPalindrome = function(s) {
  
    const cleanString = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    if (cleanString.length === 0) {
        return true;
    }

    let left = 0;                     
    let right = cleanString.length - 1; 

    while (left < right) {
    
        if (cleanString[left] !== cleanString[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}

// --- 예제 사용 ---
console.log("--- Testing isPalindrome ---");

// Test cases
const s1 = "A man, a plan, a canal: Panama";
console.log(`Input: "${s1}"`);
console.log(`Output: ${isPalindrome(s1)}`); // Output: true
console.log("--------------------");

const s2 = "race a car";
console.log(`Input: "${s2}"`);
console.log(`Output: ${isPalindrome(s2)}`); // Output: false
console.log("--------------------");

const s3 = " "; // 공백 문자만 있는 경우
console.log(`Input: "${s3}"`);
// 공백 제거 후 cleanString은 ""가 됨
console.log(`Output: ${isPalindrome(s3)}`); // Output: true
console.log("--------------------");

const s4 = "0P";
console.log(`Input: "${s4}"`);
console.log(`Output: ${isPalindrome(s4)}`); // Output: false
console.log("--------------------");
