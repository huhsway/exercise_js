// https://overcome-the-limits.tistory.com/16

// 단일 링크드리스트
class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = new Node("head");
    }
  
    append(value) {
      let newNode = new Node(value); //새로운 노드 생성
      let current = this.head; // 시작 노드
      while (current.next != null) {
        // 맨 끝 노드 찾기
        current = current.next;
      }
      current.next = newNode;
    }
  
    insert(value, item) {
      let newNode = new Node(value); //새로운 노드 생성
      let current = this.find(item); // 삽입할 위치의 노드 찾기
      newNode.next = current.next; // 찾은 노드가 가리키는 노드를 새로은 노드가 가리키기
      current.next = newNode; // 찾은 노드는 이제부터 새로운 노드를 가리키도록 하기
    }
  
    remove(item) {
      let preNode = this.findPrevious(item); // 삭제할 노드를 가리키는 노드 찾기
      preNode.next = preNode.next.next; // 삭제할 노드 다음 노드를 가리키도록 하기
    }
  
    find(item) {
      let curNode = this.head;
      while (curNode.value !== item) {
        curNode = curNode.next;
      }
      return curNode;
    }
  
    findPrevious(item) {
      let curNode = this.head;
      while (curNode.next != null && curNode.next.value !== item) {
        curNode = curNode.next;
      }
      return curNode;
    }
  
    toString() {
      let arr = [];
      let curNode = this.head;
      while (curNode.next !== null) {
        arr.push(curNode.next.value);
        curNode = curNode.next;
      }
      return arr;
    }
  }
  
  let linkedList = new LinkedList();
  linkedList.insert("A", "head");
  linkedList.insert("B", "A");
  linkedList.insert("C", "B");
  linkedList.remove("B");
  linkedList.append("D");
  linkedList.append("E");
  
  console.log(linkedList.toString());
  