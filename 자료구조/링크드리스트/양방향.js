// https://overcome-the-limits.tistory.com/16

// 양방향
class Node {
    constructor(element) {
      this.element = element;
      this.next = null;
      this.prev = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = new Node("head");
    }
  
    find(item) {
      let currNode = this.head;
      while (currNode.element !== item) {
        currNode = currNode.next;
      }
      return currNode;
    }
  
    insert(newElement, item) {
      let newNode = new Node(newElement);
      let current = this.find(item);
      if (current.next == null) {
        newNode.next = null;
        newNode.prev = current;
        current.next = newNode;
      } else {
        newNode.next = current.next;
        newNode.prev = current;
        current.next.prev = newNode;
        current.next = newNode;
      }
    }
  
    remove(item) {
      let currNode = this.find(item);
      if (currNode.next !== null) {
        currNode.prev.next = currNode.next;
        currNode.next.prev = currNode.prev;
        currNode.next = null;
        currNode.prev = null;
      }
    }
  }
  
  const linkedList = new LinkedList();
  linkedList.insert("Seoul", "head"); //head->Seoul
  linkedList.insert("Busan", "Seoul"); //head->Seoul->Busan
  linkedList.insert("Daegu", "Seoul"); //head->Seoul->Daegu->Busan
  linkedList.insert("Incheon", "Busan"); //head->Seoul->Daegu->Busan->Incheon
  linkedList.remove("Busan"); //head->Seoul->Daegu->Incheon
  
  