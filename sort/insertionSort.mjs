import swap from "./swap.mjs"
function insertionSort(arr){
    //1.從第二個開始
    //2.每次都和左邊的項目一一比較，比左邊項目小，就和該值交換。
    //3.比較基準base--
    for(let i = 1; i < arr.length ; i++){
        let base = i
        for(let j=i-1; j >=0 ; j--){
            // console.log(`${i}[${arr[i]}]和${j}[${arr[j]}]比`)
            if(arr[base]>=arr[j]) break
            if(arr[base]<arr[j]) {
                swap(arr,base,j)
                base--
            }
        }
    }
    return arr
}

console.log(insertionSort([0,0,0,0,15,10,0]))

//3,5,9,18,27,35,17

