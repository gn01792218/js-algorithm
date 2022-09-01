interface LinkedList {
    value : number,
    next : LinkedList | null
}
//這就是一個LinkedList
let list:LinkedList = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
};
//用純js創建一個linkedList會長這樣
// let list:LinkedList = { value: 1 ,next: };
// list.next = { value: 2 };
// list.next.next = { value: 3 };
// list.next.next.next = { value: 4 };
// list.next.next.next.next = null;

//分割LinkedList
//secondList從value3開始到最後
let secondList = list.next?.next
//讓原本的list value2的next尾部變成空的
if(list.next?.next){
  list.next.next = null
}

//Join LinkedList
if(list.next){
  list.next.next = secondList as LinkedList
}

//在最前頭插入LinkedList
list = { value:10, next:list}

//把第二個項目移除
//直接把第二個項目改成第三個項目即可
if(list.next){
  list.next = list.next.next
}

console.log(list)

