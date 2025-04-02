function solution(num_str) {
    var answer = 0;
    return answer = Array.from(num_str).reduce((acc, str)=>acc+Number(str),0);
}