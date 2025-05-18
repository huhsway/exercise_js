/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */

// https://leetcode.com/problems/insert-interval/

var insert = function(intervals, newInterval) {
    const output = []
    let i = 0

    // 새로운 인터벌의 스타트보다 작으면 일괄 삽입
    while (i < intervals.length && intervals[i][1] < newInterval[0]) {
        output.push(intervals[i])
        i++
    }

    // 겹치는 부분 계산 후 삽입
    while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0])
        newInterval[1] = Math.max(newInterval[1], intervals[i][1])
        i++
    }
    output.push(newInterval)

    // 나머지 새로운 인터벌과 겹치는거 없이 기존 큰 애들 일괄 삽입
    while (i < intervals.length) {
        output.push(intervals[i])
        i++
    }
    return output
};