export default class ArrayList<T> {
	public list: T[];
	// private list: T[];
	private length: number;

	constructor() {
		this.list = new Array(16);
		this.length = 0;
	}

	public prepend(item: T): void {
		this.resizeIfNeeded();

		let previousItem: T;

		for (let i = 0; i < this.size() + 1; i++) {
			if (i === 0) {
				previousItem = this.list[i];
				this.list[i] = item;
				continue;
			}

			const currentItem = this.list[i];
			this.list[i] = previousItem!;
			previousItem = currentItem;
		}

		this.length++;
	}

	public insertAt(item: T, idx: number): void {
		this.resizeIfNeeded();

		// resize until we have the requested idx available
		while (this.list.length < idx) {
			this.resize();
		}

		let previousItem: T;

		for (let i = idx; i < this.size() + 1; i++) {
			if (i === idx) {
				previousItem = this.list[i];
				this.list[i] = item;
				continue;
			}

			const currentItem = this.list[i];
			this.list[i] = previousItem!;
			previousItem = currentItem;
		}

		this.length++;
	}

	public append(item: T): void {
		this.resizeIfNeeded();

		this.list[this.size()] = item;
		this.length++;
	}

	public remove(item: T): T | undefined {
		let removedElement;

		for (let i = 0; i < this.size(); i++) {
			if (item === this.list[i]) {
				removedElement = this.list[i];
			}

			if (removedElement) {
				this.list[i] = this.list[i + 1];
			}
		}

		if (!removedElement) {
			return;
		}

		this.length--;
		return removedElement;
	}

	public removeAt(idx: number): T | undefined {
		const elementToRemove = this.list[idx];

		if (!elementToRemove) {
			return;
		}

		for (let i = idx; i < this.size(); i++) {
			this.list[i] = this.list[i + 1];
		}

		this.length--;
		return elementToRemove;
	}

	public get(idx: number): T | undefined {
		if (idx > this.size()) {
			return undefined;
		}

		return this.list[idx];
	}

	public size(): number {
		return this.length;
	}

	private resize(): void {
		const currentSize = this.list.length; // the size of the array buffer
		const newSize = currentSize + currentSize / 2;

		const newList = new Array(newSize);

		for (let i = 0; i < currentSize; i++) {
			newList[i] = this.get(i);
		}

		this.list = newList;
	}

	private resizeIfNeeded(): void {
		if (this.list.length === this.size()) {
			this.resize();
		}
	}
}
