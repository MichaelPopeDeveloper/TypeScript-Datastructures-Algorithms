import { LinkedList } from '../SingleLinkedList/SingleLinkedList';

export class Queue<T> {
    private _list = new LinkedList<T>();
    public Count = this._list.Count;
    public Enqueue(item: T) {
        this._list.AddLast(item);
    }

    public Dequeue() {
        if (this._list.Count == 0) {
            throw new Error('The queue is empty');
        }

        let value: T = this._list.Head.Value;
        this._list.RemoveFirst();
        return value;
    }

    public Peek() {
        if (this._list.Count == 0) {
            throw new Error('The queue is empty');
        }

        return this._list.Head.Value;
    }

    public Clear() {
        this._list.Clear();
    }
}