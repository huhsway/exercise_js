// /**
//  * // Definition for a Node.
//  * function Node(val, neighbors) {
//  *    this.val = val === undefined ? 0 : val;
//  *    this.neighbors = neighbors === undefined ? [] : neighbors;
//  * };
//  */

/**
 * @param {Node} node
 * @return {Node}
 */

// https://leetcode.com/problems/clone-graph/description/

// dfs로 graph 복제
var cloneGraph = function (node) {
  // in O(n)
  let newGraph = {};

  const dfs = (node) => {
    if (node === null) return node;
    if (!newGraph[node.val]) {
      newGraph[node.val] = new Node(node.val);
      newGraph[node.val].neighbors = node.neighbors.map((neighbor) =>
        dfs(neighbor)
      );
    }
    return newGraph[node.val];
  };

  return dfs(node);
};

// // Definition for a Node.
// function Node(val, neighbors) {
//     this.val = val === undefined ? 0 : val;
//     this.neighbors = neighbors === undefined ? [] : neighbors;
// };

// // Node 객체 생성
// const node1 = new Node(1);
// const node2 = new Node(2);
// const node3 = new Node(3);
// const node4 = new Node(4);

// // 이웃 설정 (링크 연결)
// node1.neighbors.push(node2, node4);
// node2.neighbors.push(node1, node3);
// node3.neighbors.push(node2, node4);
// node4.neighbors.push(node1, node3);

// // cloneGraph 함수 호출 (시작 노드 Node1을 전달)
// const clonedGraph = cloneGraph(node1);

// // clonedGraph는 이제 복제된 Node(1) 객체입니다.
// console.log(clonedGraph) //를 통해 복제된 그래프의 구조를 확인할 수 있습니다.
// // (단, 순환 참조로 인해 콘솔 출력은 복잡할 수 있음)