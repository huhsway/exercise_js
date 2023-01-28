// https://velog.io/@ko9612/JavaScript-%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0-Binary-Search-Tree
class BinarySearchTree {
  constructor(value) {
    //BST의 constructor를 구현-> 이진 탐색 트리의 Node.
    this.value = value;
    this.left = null;
    this.right = null;
  }

  // tree에 value 추가(삽입)
  insert(value) {
    // 인자의 value가 this.value보다 작을 경우, 왼쪽 노드에서 진행.
    if (value < this.value) {
      // this.left에 아무것도 없을 경우, 새로운 자식 노드를 추가.
      if (this.left === null) {
        this.left = new BinarySearchTree(value);
      } else {
        // this.left의 자식 노드가 있을 경우, 자식 노드에서 insert 재귀 사용.
        this.left.insert(value);
      }

    // 인자의 value가 this.value보다 클 경우, 오른쪽 노드에서 진행.
    } else if (value > this.value) {
      // this.right에 아무것도 없을 경우, 새로운 자식 노드를 추가.
      if (this.right === null) {
        this.right = new BinarySearchTree(value);
      } else {
        // this.right의 자식 노드가 있을 경우, 자식 노드에서 insert 재귀 사용.
        this.right.insert(value);
      }
		//그것도 아니라면, 입력값이 트리에 들어 있는 경우.
    } else {
      // 이미 value값을 포함하고 있으므로, 아무것도 하지 않는다.
    }
  }

  // tree의 value값 탐색.
  contains(value) {
    // 찾는 value값이 노드의 value와 일치한다면, true return.
    if (value === this.value) {
      return true;
    }
    // 찾는 value값이 노드의 value 보다 작다면, 왼쪽에서 contains 재귀 사용.
    if (value < this.value) {
			// 현재 노드의 왼쪽이 비어 있지 않고, 노드의 값이 입력값과 일치하면 true return.
			// 일치하지 않다면 왼쪽 노드로 이동하여 다시 탐색(재귀)
      return !!(this.left && this.left.contains(value));
    }

    // 찾는 value값이 노드의 value 보다 크다면, 오른쪽에서 contains 재귀 사용.
    if (value > this.value) {
			// 현재 노드의 오른쪽이 비어 있지 않고, 노드의 값이 입력값과 일치하면 true return.
			// 일치하지 않다면 오른쪽 노드로 이동하여 다시 탐색(재귀)
      return !!(this.right && this.right.contains(value));
    }
		// 없다면 false return
  }

	/*
	트리의 순회
  단지 순회만 하는 것이 아닌, 함수를 매개변수로 받아 콜백 함수에 값을 적용시킨 것을 순회해야 한다.
	*/

	// 전위 순회
  preorder(callback) {
		callback(this.value);
    if (this.left) {
      this.left.preorder(callback);
    };
    if (this.right) {
      this.right.preorder(callback);
    };
  }

	// 중위 순회
  inorder(callback) {
    if (this.left) {
      this.left.inorder(callback);
    };
    callback(this.value);
    if (this.right) {
      this.right.inorder(callback);
    };
  }

	// 후위 순회
  postorder(callback) {
    if (this.left) {
      this.left.postorder(callback);
    };
    if (this.right) {
      this.right.postorder(callback);
    };
    callback(this.value);
  }

}

// 입출력
const rootNode = new BinarySearchTree(10);
rootNode.insert(7);
rootNode.insert(8);
rootNode.insert(12);
rootNode.insert(11);
rootNode.left.right.value; // 8
rootNode.right.left.value; //11

let arr = [];
rootNode.preorder((value) => arr.push(value));
console.log(arr); // [10, 7, 8, 12, 11]