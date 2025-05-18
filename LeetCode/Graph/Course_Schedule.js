/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const inDegree = new Array(numCourses).fill(0);
    for(const pre of prerequisites) {
        inDegree[pre[0]]++;
    }
    const zeroDegree = [];
    for(let i = 0; i < numCourses; i++) {
        if(inDegree[i] === 0) {
            zeroDegree.push(i);
        }
    }
    if(zeroDegree.length === 0) return false;

    while(zeroDegree.length) {
        const course = zeroDegree.pop();
        for(const pre of prerequisites) {
            if(course === pre[1]) {
                inDegree[pre[0]]--;
                if(inDegree[pre[0]] === 0) {
                    zeroDegree.push(pre[0]);
                }
            }
        }
    }
    for(const num of inDegree) {
        if(num !== 0) return false;
    }
    return true;
};
