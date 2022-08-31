import pivot from "./pivotHelper.mjs";
function quickSort(arr , left=0 , right=arr.length-1){ //預設值讓第一次跑整個陣列
    if(left > right) return  //終止點為分解到只有一個項目時
    let pivotIndex = pivot(arr , left , right)
    quickSort(arr,left,pivotIndex-1) //整理左半邊
    quickSort(arr,pivotIndex+1,right) //整理右半邊
    return arr
}
console.log(quickSort([0,34,29,4,-5,78,15,2,3,56,5,100]))