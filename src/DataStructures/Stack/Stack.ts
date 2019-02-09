import {LinkedList} from '../SingleLinkedList/SingleLinkedList';

export class Stack<T> {
    private _list = new LinkedList<T>();
    public Count: number = this._list.Count;
    
    public Push(item: T) {
        this._list.AddFirst(item);
    }
    
    public Pop() {
        if (this._list.Count == 0) {
            throw new Error("The stack is empty");
        }
        
        const value: T = this._list.Head.Value;
        this._list.RemoveFirst();
        return false;
    }
    
    public Peek() {
        if (this._list.Count == 0) {
            throw new Error('The stack is empty');
        }
        return this._list.Head.Value;
    }
    
    public Clear() {
        this._list.Clear();
    }
    
}