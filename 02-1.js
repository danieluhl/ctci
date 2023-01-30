// CHAPTER 2: Linked Lists

// call run tests
const runTests = (fn, testCases) => {
  //  RUN TESTS
  testCases.forEach(([input, expected]) => {
    const result = fn(input);
    console.assert(
      result === expected,
      `${input}\n EXPECTED: ${expected}\n GOT: ${result}`
    );

    console.log('If nothing showing abve, all good!!!!');
  });
};

class Node {
  constructor(data, next = null) {
    this.val = data;
    this.next = next;
  }
}

const getLinkedList = (...vals) => {
  const head = new Node(1);
  let tail = head;
  for (let i = 0; i < vals.length; i++) {
    tail.next = new Node(vals[i]);
    tail = tail.next;
  }
  return head;
};

const printList = (list) => {
  let cur = list;
  console.log('printing List:');
  while (cur != null) {
    console.log(cur.val);
    cur = cur.next;
  }
};

/*
  Problem 1: remove duplicates
*/
const removeDupes = (head) => {
  const visited = new Set();
  let prev = head;
  let cur = prev.next;
  visited.add(prev.val);
  while (cur != null) {
    if (visited.has(cur.val)) {
      // remove dupe
      prev.next = cur.next;
      cur = prev;
    }
    visited.add(cur.val);
    prev = cur;
    cur = prev.next;
  }
  return head;
};

// printList(removeDupes(getLinkedList(1, 1, 1, 1, 2)));

// 2.1: get the kth element from the end
const getFromEnd = (list, dist) => {
  let end = list;
  let first = list;
  while (end != null) {
    end = end.next;
    if (dist == 0) {
      first = first.next;
    } else {
      dist = dist - 1;
    }
  }
  if (dist > 0) {
    return 'input not long enough';
  }
  return first.val;
};

// console.log(getFromEnd(getLinkedList(1, 2, 3, 4, 2), 3));
// console.log(getFromEnd(getLinkedList(1), 3));


