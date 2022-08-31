//請利用以下資料，計算出所有員工的薪水共有多少
//資料結構 : 公司物件下有 sales 部門 和 開發部門 (其下又分兩組sites和internals)
let company = {
    sales: [{
      name: 'John',
      salary: 1000
    }, {
      name: 'Alice',
      salary: 1600
    }],
    development: {
      sites: [{
        name: 'Peter',
        salary: 2000
      }, {
        name: 'Alex',
        salary: 1800
      }],
  
      internals: [{
        name: 'Jack',
        salary: 1300
      }],
    }
  };

  function sumSalaries(companyObj) {
    //中斷點 : 判斷是陣列的話，就計算salary加總
    if( Array.isArray(companyObj) ) {
        return companyObj.reduce((pre,current)=>{
            return pre + current.salary
        },0)
    } else {
        let sum = 0
        for( let i of Object.values(companyObj)){
            sum += sumSalaries(i)
        }
        return sum
    }
    //遞迴 : 非陣列，就for輪尋其屬性，
  }

  console.log(sumSalaries(company))