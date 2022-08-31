import swap from './swap.mjs'
function bubbleSort(arr){
    for(let i =0 ; i <arr.length-1;i++){
        let hasSwap = false
        for(let j = 0 ; j<arr.length-1-i; j++){
            //如果每一個和下一個相比比較大，就交換
            if(arr[j]>arr[j+1]) {
                hasSwap = true
                swap(arr,j,j+1)
            }
        }
        if(!hasSwap) break  //假如前一次循環沒有出現過交換，表示已經排序完成，不必再排了
    }
    return arr
}
console.log(bubbleSort([5,4,1,19,10]))