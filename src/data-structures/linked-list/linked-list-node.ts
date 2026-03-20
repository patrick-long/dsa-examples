export default class LinkedListNode {
	public next: LinkedListNode;
	public prev: LinkedListNode;
	public last: LinkedListNode;

	constructor(data: number, nextNode: LinkedListNode, prevNode: LinkedListNode) {
		this.data = data;
		this.setNext(nextNode);
		this.setPrevious(prevNode);
	}

	public setNext(node: LinkedListNode): void {
		this.next = node;
		
		if (this === this.last) {
			this.last = node;
		}

		if (node && node.prev !== this) {
			this.next.setPrevious(this);
		}
	}

	public setPrevious(node: LinkedListNode): void {
		this.prev = node;
		
		if (node && this.prev.next !== this) {
			this.prev.setNext(this);
		}
	}

	public clone(): LinkedListNode {
		let nextClone = null;

		if (this.next) {
			nextClone = this.next.clone();
		}

		const clonedHead = new LinkedListNode(this.data, nextClone, null);

		return clonedHead;
	}
}

