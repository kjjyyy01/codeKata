function solution(arr1, arr2) {
    let answer = 0;
    
    if(arr1.length !== arr2.length){
        answer = arr1.length < arr2.length ? -1 : 1
    }else {
        let sum1 = arr1.reduce((acc,num)=>acc+num,0)
        let sum2 = arr2.reduce((acc,num)=>acc+num,0)
        
        if(sum1 < sum2){
            answer = -1
        }else if(sum1 > sum2){
            answer = 1
        }
    }
    return answer;
}