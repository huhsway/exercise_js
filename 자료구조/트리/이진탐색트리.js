// https://velog.io/@ko9612/JavaScript-%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0-Binary-Search-Tree
class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BinarySearchTree(value);
      } else {
        this.left.insert(value);
      }

    } else if (value > this.value) {
      if (this.right === null) {
        this.right = new BinarySearchTree(value);
      } else {
        this.right.insert(value);
      }
    } else {
      // 이미 value값을 포함하고 있으므로, 아무것도 하지 않는다.
    }
  }

  contains(value) {
    if (value === this.value) {
        return true;
    }

    if (value < this.value && this.left) {
        return this.left.contains(value);  
    }

    if (value > this.value && this.right) {
        return this.right.contains(value);  
    }

    return false;
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
