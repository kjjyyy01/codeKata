function solution(arr, n) {
    let answer = [];
    
    answer = arr.map((num,index)=>{
        if(arr.length % 2 === 1){
            return index % 2 === 0 ? num + n : num; 
        }else {
            return index % 2 === 1 ? num + n : num; 
        }
    })
    
    return answer;
}