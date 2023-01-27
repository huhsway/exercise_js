/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head){
    if(head === null) return false;
    
    let tor = head, hare = head;
    
    while(hare && hare.next){
        tor = tor.next;
        hare = hare.next.next;
        //console.log(tor, hare);
        if(tor === hare)
            return true;
        
    }
    return false;
}
