// // 이진탐색 사용

// const solution = (words, queries) => {
//     const answer = [];
//     const perfix = getTwoDimensionalArray(10001);
//     const suffix = getTwoDimensionalArray(10001);
  
//     for (const word of words) {
//       perfix[word.length].push(word);
//       suffix[word.length].push(reverseString(word));
//     }
  
//     for (let i = 0; i < 10001; i++) {
//       perfix[i].sort();
//       suffix[i].sort();
//     }
  
//     for (const q of queries) {
//       let range = 0;
//       if (q[0] === '?') {
//         range = countByRange(
//           suffix[q.length],
//           reverseString(q).replace(/\?/g, 'a'),
//           reverseString(q).replace(/\?/g, 'z')
//         );
//       } else {
//         range = countByRange(
//           perfix[q.length],
//           q.replace(/\?/g, 'a'),
//           q.replace(/\?/g, 'z')
//         );
//       }
//       answer.push(range);
//     }
//     return answer;
//   };
  
//   const binarySearch = (array, target, start, end) => {
  
//     while (start <= end) {
//       let mid = Math.floor((start + end) / 2);
  
//       if (target === array[mid]) {
//         return mid;
//       } else if (array[mid] > target) {
//         end = mid - 1;
//       } else {
//         start = mid + 1;
//       }
//     }
  
//     return end; // lowerBound와  upperBound를 구하기 위해서 end 리턴
//   };

  
//   const getTwoDimensionalArray = (n) =>
//     Array(n)
//       .fill(null)
//       .map(() => []);
  
//   const countByRange = (data, left, right) =>
//     binarySearch(data, right, 0, data.length-1) - binarySearch(data, left, 0, data.length-1);
  
//   const reverseString = (string) => string.split('').reverse().join('');
  