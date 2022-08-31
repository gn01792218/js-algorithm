import merge from "./merge.mjs"
function mergeSort(arr){
    if(arr.length<=1){return arr}
    //將陣列切成一半
    let center = Math.floor(arr.length/2)
    //使用遞迴函式讓陣列一直往下分解
    let arr1 = mergeSort(arr.slice(0,center))
    let arr2 = mergeSort(arr.slice(center)) //只給一個參數，將會返回該index往後一格的所有項目。    

    //返回開始合併排序後的結果
    return merge(arr1,arr2)
}
console.log(mergeSort([10,24,73,76]))