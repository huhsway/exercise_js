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

const node1 = new Tree(1);
node1.insertNode(2);
node1.children[0].insertNode(3);

console.log(node1.contains(3))
