function bfs(maps, newMap, y, x) {
    let cnt = 1;
    const dy = [0, 0, -1, 1]
    const dx = [-1, 1, 0, 0]
    const queue = []

    queue.push({ y: y, x: x })
    newMap[y][x] = true

    while (queue.length) {
        const { y, x } = queue.shift()
        for (let i = 0; i < 4; i++) {
            const ny = y + dy[i]
            const nx = x + dx[i]
            if (ny >= 0 && ny < maps.length && nx >= 0 && nx < maps[0].length) {
                if (newMap[ny][nx] === false && maps[ny][nx] === 1) {
                    newMap[ny][nx] = true
                    maps[ny][nx] = 0
                    queue.push({ y: ny, x: nx })
                    cnt++;
                }
            }
        }
    }


    return cnt
}

function check(newMap, y, x) {
    let cnt = 0;

    const dy = [0, 0, -1, 1]
    const dx = [-1, 1, 0, 0]

    for (let i = 0; i < 4; i++) {
        const ny = y + dy[i]
        const nx = x + dx[i]
        if (ny < 0 || ny >= newMap.length || nx < 0 || nx >= newMap[0].length || newMap[ny][nx] === false) {
            cnt++;
        }
    }

    return cnt
}

function solution(maps) {
    let answer = 0;
    let newMap = Array.from(Array(maps.length), () => Array(maps[0].length).fill(false))
    let sum = 0

    const mapArr = [];
    const result = []

    for (let i = 0; i < maps.length; i++) {
        for (let j = 0; j < maps[0].length; j++) {
            if (maps[i][j] === 1 && newMap[i][j] === false) {
                bfs(maps, newMap, i, j)
                mapArr.push(newMap)
                newMap = Array.from(Array(maps.length), () => Array(maps[0].length).fill(false))

            }
        }
    }

    for (const map of mapArr) {
        for (let i = 0; i < map.length; i++) {
            for (let j = 0; j < map[0].length; j++) {
                if (map[i][j] === false) continue;
                sum += check(map, i, j)
            }
        }
        result.push(sum)
        sum = 0
    }

    answer = Math.max(...result)

    console.log(answer)
    
    return answer
}

solution(([[1,0,1,1],[0,0,1,1],[1,1,0,1],[1,1,0,0]]))