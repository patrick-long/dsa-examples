import LinkedListNode from '../data-structures/linked-list/linked-list-node.ts';
import ArrayList from '../data-structures/array-list/array-list.ts';

// ArrayList
const list = new ArrayList();

for (let i = 0; i < 16; i++) {
	list.append(i);
}

console.log({ size: list.size() });

list.append(17);

console.log({ size: list.size() });

// LinkedList nodes
const first = new LinkedListNode(1);
const second = new LinkedListNode(2, null, first);
const third = new LinkedListNode(3, null, second);

console.log({ first, second, third });
