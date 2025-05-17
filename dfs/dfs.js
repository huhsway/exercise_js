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

function dfs(graph, start, visited) {

    visited[start] = true;
    console.log(start);
    for (const i of graph[start]) {
        if(!visited[i]) {
            dfs(graph, i, visited)
        }
    }

}

dfs(graph, 1, visited)