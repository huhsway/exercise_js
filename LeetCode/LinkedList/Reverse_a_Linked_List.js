/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    
    let prev = null
    let current = null
    
    while(head){
        current  =  head.next
        head.next = prev
        prev = head
        head = current 
        
        
    }
    return prev

};
