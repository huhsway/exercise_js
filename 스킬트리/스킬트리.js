// 스킬 트리 문제
// 출처 : http://pgrblues.egloos.com/m/5317734#n

function dfs(skillTree, costTree, rootIndex, skillPoint) {
    let sumSp = 0
    if (skillTree[rootIndex].length === 0) {
        return costTree[rootIndex] = skillPoint
    }

    for (const childIdx of skillTree[rootIndex]) {
        sumSp += dfs(skillTree, costTree, childIdx, skillPoint)
    }
    return costTree[rootIndex] = sumSp
}

function solution(total_sp, skills) {

    const answer = []

    let max = 0
    for (const skill of skills) {
        if (skill[1] > max) max = skill[1]
    }

    const skillTree = Array(max + 1).fill().map(() => []);

    for (const skill of skills) {
         skillTree[skill[0]].push(skill[1])
    }

    let adjCnt = 0
    for (const subTree of skillTree) {
        adjCnt += subTree.length
    }

    const sp = Math.floor(total_sp / (max + adjCnt))

    const costTree = Array(max + 1)
    dfs(skillTree, costTree, 1, sp)

    for (let i = 0; i < costTree.length; i++) {
        answer.push(costTree[i]);
    }

    return answer.filter(it => it !== undefined)
}



console.log(solution(121, [[1,2],[1,3],[3,6],[3,4],[3,5]]))
