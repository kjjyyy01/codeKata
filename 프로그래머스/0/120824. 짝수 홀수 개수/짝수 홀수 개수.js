function solution(num_list) {
    // var answer = [];
//     let evenCount = 0;
//     let oddCount = 0;
    
//     for(let i = 0; i < num_list.length; i++){
//         if(num_list[i] % 2 === 0){
//             evenCount++
//         }else{
//             oddCount++
//         }
//     }
    let answer = [
        num_list.filter((num)=>num%2===0).length,
        num_list.filter((num)=>num%2===1).length
    ]
    
    return answer;
    // return answer = [evenCount, oddCount];
}