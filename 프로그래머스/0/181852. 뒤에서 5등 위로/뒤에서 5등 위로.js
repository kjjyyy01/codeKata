function solution(num_list) {
    var answer = [];
    return answer = num_list.sort((a,b)=>a-b).slice(5);
}