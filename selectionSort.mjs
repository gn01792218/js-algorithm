import swap from "./swap.mjs"

function selectionSort(arr){
    //1.先設一個變數儲存最小值
    //2.每次回圈中i都和j比，取較小值，比到最後做交換，將此回合最小值換到頭
    for(let i = 0 ; i<arr.length ;i++){
        let min = i
        let hasSmaller = false
      for(let j = i+1 ; j<arr.length ;j++){
        if(arr[min]>arr[j]) {
            min = j 
            hasSmaller = true
        }
      }
      if(hasSmaller) swap(arr,i,min)
      //也可以使用這個判斷式，判斷最小值不是i本身才swap，就不需要hasSmaller的判斷了
      // if(min !== i) swap(arr,i,min)
    }
    return arr
}
console.log(selectionSort([79,5,3,4,3]))