/**
 * 주어진 문자열이 회문(palindrome)인지 확인합니다.
 * 영숫자(alphanumeric) 문자만 고려하며 대소문자는 무시합니다.
 * @param {string} s 입력 문자열
 * @returns {boolean} 회문이면 true, 아니면 false
 */

// https://leetcode.com/problems/valid-palindrome/

function isPalindrome(s) {
    // 1. 영숫자가 아닌 문자 제거 및 소문자로 변환
    // 정규표현식 /[^a-zA-Z0-9]/g 는 영문자(a-z, A-Z)나 숫자(0-9)가 아닌 모든 문자를 찾습니다.
    // g 플래그는 문자열 전체에서 모든 일치 항목을 찾도록 합니다.
    // replace 메서드로 찾은 문자들을 빈 문자열("")로 대체합니다.
    // toLowerCase() 메서드로 문자열 전체를 소문자로 변환합니다.
    const cleanString = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    // 2. 빈 문자열은 회문으로 간주 (문제 정의에 따라 달라질 수 있으나, LeetCode에서는 보통 true)
    if (cleanString.length === 0) {
        return true;
    }

    // 3. 투 포인터를 사용하여 회문 검사
    let left = 0;                     // 왼쪽 포인터 (시작 인덱스)
    let right = cleanString.length - 1; // 오른쪽 포인터 (마지막 인덱스)

    while (left < right) {
        // 양쪽 포인터가 가리키는 문자가 다르면 회문이 아님
        if (cleanString[left] !== cleanString[right]) {
            return false;
        }
        // 포인터 이동
        left++;
        right--;
    }

    // 반복문이 무사히 끝나면 회문임
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