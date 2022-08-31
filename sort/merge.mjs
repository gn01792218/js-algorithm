export default function merge(arr1,arr2) {
    let arr1Point = 0
    let arr2Point = 0
    let results = []
    while(arr1Point<arr1.length && arr2Point<arr2.length){
        if(arr1[arr1Point] <= arr2[arr2Point]){
            results.push(arr1[arr1Point])
            arr1Point++
        }else{
            results.push(arr2[arr2Point])
            arr2Point++
        }
    }
    //檢查哪個陣列有多餘的，就推進results裡面
    while(arr1Point<arr1.length){
        results.push(arr1[arr1Point])
        arr1Point++
    }
    while(arr2Point<arr2.length){
        results.push(arr2[arr2Point])
        arr2Point++
    }
    //等同於上面兩個while的寫法
    // if(arr1Point<arr1.length){
    //     for(let i = arr1Point ; i <arr1.length ;i++){
    //         results.push(arr1[i])
    //     }
    // }
    // if(arr2Point<arr2.length){
    //     for(let i = arr2Point ; i <arr2.length ;i++){
    //         results.push(arr2[i])
    //     }
    // }
    return results
  }
 