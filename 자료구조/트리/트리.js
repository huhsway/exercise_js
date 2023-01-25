// https://velog.io/@porupit0122/JavaScript-%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0-4-%ED%8A%B8%EB%A6%AC

class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  
  insertNode(value) {
    const childNode = new Tree(value);
    this.children.push(childNode);
  }

  contains(value) {
    if (this.value === value) {
      return true;
    }
    for (let i = 0; i < this.children.length; i++) {
      const childNode = this.children[i];
      if (childNode.contains(value)) {
        return true;
      }
    }
    return false;
  }
}

// class Node {
//     constructor(content, children = []) {
//       this.content = content;
//       this.children = children;
//     }
//   }
  
//   const tree = new Node('hello', [
//     new Node('world'),
//     new Node('and'),
//     new Node('fun', [
//       new Node('javascript!')
//     ])
//   ]);
  
//   function traverse(node) {
//     console.log(node.content);
//     for (let child of node.children) {
//       traverse(child);
//     }
//   }
  
//   traverse(tree);
//   // hello 
//   // world 
//   // and 
//   // fun 
//   // javascript!