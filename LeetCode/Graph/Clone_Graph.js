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
