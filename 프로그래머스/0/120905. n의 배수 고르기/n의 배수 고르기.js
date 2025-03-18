function solution(n, numlist) {
    var answer = [];
    return answer = numlist.filter((element)=>element % n === 0);
}