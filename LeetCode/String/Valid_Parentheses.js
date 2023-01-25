/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
    // if (s.length % 2 !== 0) return false;
    
    const pairs = {
        '{': '}',
        '[': ']',
        '(': ')'
    };
    
    let stack = [];
    
    for (let i = 0; i < s.length; i++) {
        if (pairs.hasOwnProperty(s[i])) { // hasOwnProperty사용으로 키 값 확인
            stack.push(s[i]);
            continue;
        }
        
        if (pairs[stack[stack.length - 1]] === s[i]) {
            stack.pop();
            continue;
        }
        return false;
    }
    return stack.length === 0;
};