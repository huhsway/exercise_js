function solution(food_times, k) {
  let arr = [];
  let total = 0;
  for (let i = 0; i < food_times.length; i++) {
    total += food_times[i];
    arr[i] = { time: food_times[i], index: i + 1 };
  }

  if (total <= k) return -1;

  arr.sort((a, b) => {
    if (a.time === b.time) a.index - b.index;
    return a.time - b.time;
  });

  let previous = 0;
  let now = 0;

  for (let i = 0; i < arr.length; i++) {
    now = (arr[i].time - previous) * (arr.length - i); 
    if (k - now >= 0) { 
      previous += arr[i].time - previous; 
      k -= now; 
    } else {
      let temp = Math.floor(k / (arr.length - i));
      k -= temp * (arr.length - i);
      previous += temp;
      break;
    }
  }

  arr = arr.filter(item => item.time - previous > 0);
  arr.sort((a, b) => {
    return a.index - b.index;
  });

  return arr[k].index;
}

console.log(solution([3, 1, 2, 4], 5));

// function solution(food_times, k) {
//     let arr = [];
//     let summary = 0;
//     for (let i = 0; i < food_times.length; i++) {
//       summary += food_times[i];
//       arr[i] = { time: food_times[i], index: i + 1 };
//     }
  
//     if (summary <= k) return -1;
  
//     arr.sort((a, b) => {
//       if (a.time === b.time) a.index - b.index;
//       return a.time - b.time;
//     });
  
//     summary = 0;
//     let previous = 0;
//     let length = food_times.length;

//     while (summary + ((arr[0].time - previous) * length) <= k) {
//       const now = arr.shift().time;
//       summary += (now - previous) * length;
//       length--;
//       previous = now;
//     }

//     arr.sort((a, b) => {
//       return a.index - b.index;
//     })

//     return arr[Math.floor((k - summary) % length)].index;

//   }
  