import swap from './swap.mjs'
//這裡選擇的基準點都挑選"第一個元素"
export default function pivot(arr,startIndex=0,endIndex=arr.length+1){
    let pivot = arr[startIndex]
    let smallerIndex = startIndex //計算總共有幾個小於基準點的項目；同時代表每次找到較小值後要交換的index
    for(let i = startIndex+1 ; i <= endIndex ;i++){
        if(arr[i] < pivot){
            //統計
            smallerIndex++
            //將此比較小的數字移到左邊去
            swap(arr,i,smallerIndex)
        }
    }
    if(smallerIndex>0) swap(arr,startIndex,smallerIndex)
    return smallerIndex
}
pivot([100,5,9,10,8,40],0,4)