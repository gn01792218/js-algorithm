var _a, _b;
//這就是一個LinkedList
var list = {
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
console.log(list);
//用純js創建一個linkedList會長這樣
// let list:LinkedList = { value: 1 ,next: };
// list.next = { value: 2 };
// list.next.next = { value: 3 };
// list.next.next.next = { value: 4 };
// list.next.next.next.next = null;
//分割LinkedList
//secondList從value3開始到最後
var secondList = (_a = list.next) === null || _a === void 0 ? void 0 : _a.next;
//讓原本的list value2的next尾部變成空的
if ((_b = list.next) === null || _b === void 0 ? void 0 : _b.next) {
    list.next.next = null;
}
//Join LinkedList
if (list.next) {
    list.next.next = secondList;
}
//在最前頭插入LinkedList
list = { value: 10, next: list };
//把第二個項目移除
//直接把第二個項目改成第三個項目即可
if (list.next) {
    list.next = list.next.next;
}
console.log(list);
