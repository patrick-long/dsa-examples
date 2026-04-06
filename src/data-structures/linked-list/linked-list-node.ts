export default class LinkedListNode {
	public data: number;
	public next!: LinkedListNode | null;
	public prev!: LinkedListNode | null;
	public last!: LinkedListNode | null;

	constructor(
		data: number,
		nextNode?: LinkedListNode | null,
		prevNode?: LinkedListNode | null,
	) {
		this.data = data;

		if (nextNode) {
			this.setNext(nextNode);
		}

		if (prevNode) {
			this.setPrevious(prevNode);
		}
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
