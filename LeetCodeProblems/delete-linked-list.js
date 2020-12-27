class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    return this;
  }

  print() {
    var arr = [];
    var current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}

const deleteNode = (ll, n) => {
  let current = ll.head;

  if(ll.head.val === n){
      ll.head = current.next
      current = ll.head;
  }

  while (current !== null) {
    if(current.val === n){
        current.val = current.next.val
        current.next = current.next.next
    }
    if(current.next.val === n && current.next.next === null){
        ll.tail.val = current.val;
        ll.tail.next = null;
    }
    current = current.next
  }
  return ll.print();
};

let list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);

deleteNode(list,5);
console.log(list);
 