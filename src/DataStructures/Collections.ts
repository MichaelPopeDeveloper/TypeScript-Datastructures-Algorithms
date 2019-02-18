import { BinaryTree as BinaryTreeAbstract } from './Trees/BinaryTree/BinaryTree';
import { LinkedList as LinkedListAbstract } from './SingleLinkedList/SingleLinkedList';
import { DoublyLinkedList as DoublyLinkedListAbstract } from './DoublyLinkedList/DoublyLinkedList';
import { Queue as QueueAbstract } from './Queue/Queue';
import { Stack as StackAbstract } from './Stack/Stack';

export class BinaryTree<T> extends BinaryTreeAbstract<T> { };
export class LinkedList<T> extends LinkedListAbstract<T> { };
export class DoublyLinkedList<T> extends DoublyLinkedListAbstract<T> { };
export class Queue<T> extends QueueAbstract<T> { };
export class Stack<T> extends StackAbstract<T> { };