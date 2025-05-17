const graph = [
    [],
    [2,3,8],
    [1,7],
    [1,4,5],
    [3,5],
    [3,4],
    [7],
    [2,6,8],
    [1,7]
]

const visited = new Array(graph.length).fill(false);

function bfs(graph, start, visited) {

    const queue = []
    queue.push(start);
    visited[start] = true;
    console.log(start);

    while(queue.length) {
        const v = queue.shift()
        for (const i of graph[v]) {
            if (!visited[i]) {
                visited[i] = true;
                queue.push(i)
                console.log(i);
            }
        }
    }

}

bfs(graph, 1, visited)