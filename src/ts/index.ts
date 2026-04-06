import LinkedListNode from '../data-structures/linked-list/linked-list-node.ts';

const first = new LinkedListNode(1);
const second = new LinkedListNode(2, null, first);
const third = new LinkedListNode(3, null, second);

console.log({ first, second, third });
