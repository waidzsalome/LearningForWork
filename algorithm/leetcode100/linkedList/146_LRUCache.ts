/**
 * 双向链表+哈希
 */

class LRUCache {
  capacity: number;
  cache: Map<number, number> = new Map();
  constructor(capacity: number) {
    this.capacity = capacity;
  }
  get(key: number): number {
    let value = this.cache.get(key);
    if (value === undefined) {
      return -1;
    }
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }
  put(key: number, value: number): void {
    this.cache.delete(key);
    this.cache.set(key, value);
    const keys = this.cache.keys();
    if (this.cache.size > this.capacity) {
      this.cache.delete(keys.next().value);
    }
  }
}
// 废弃
// class LRUCache {
//   capacity: number;
//   cache: Map<number, ListNode>;
//   sum: number;
//   tail: ListNode | null;
//   head: ListNode | null;
//   constructor(capacity: number) {
//     this.capacity = capacity;
//   }
//   updateCache(key: number, node: ListNode): void {
//     this.cache.set(key, node);
//   }
//   // 添加一个
//   addToList(value: number): void {
//     this.tail.next = new ListNode(value, this.tail.next, null);
//   }
//   // 从头部删除一个
//   deleteNode(): void {
//     const next = this.head.next;
//     this.head.prev = null;
//     this.head = next;
//   }
//   // 把当前执行的节点后移到队尾
//   moveToTail(list: ListNode): void {
//     // 取出
//     let curPrev = list.prev;
//     let curNext = list.next;
//     curPrev.next = curNext;
//     curNext.prev = curPrev;
//     //变动位置
//     this.addToList(list.val);
//   }
//   get(key: number): number {
//     if (this.cache[key]) {
//       // 把当前执行的节点后移到队尾
//       this.moveToTail(this.cache[key]);
//       return this.cache.get(key).val;
//     } else {
//       return -1;
//     }
//   }
//   put(key: number, value: number): void {
//     if (this.cache.has(key)) {
//       this.moveToTail(this.cache.get(key));
//       this.tail.val = value;
//       this.updateCache(key, this.tail);
//     } else {
//       if (this.sum < this.capacity) {
//         this.sum++;
//         // 加入队尾
//         this.addToList(value);
//         this.updateCache(key, this.tail);
//       } else {
//         this.addToList(key);
//         this.updateCache(key, this.tail);
//       }
//     }
//   }
// }
