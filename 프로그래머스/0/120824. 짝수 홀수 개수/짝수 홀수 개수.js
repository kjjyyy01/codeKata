function solution(num_list) {
    var answer = [];
    let evenCount = 0;
    let oddCount = 0;
    
    for(let i = 0; i < num_list.length; i++){
        if(num_list[i] % 2 === 0){
            evenCount++
        }else{
            oddCount++
        }
    }
    
    
    return answer = [evenCount, oddCount];
}