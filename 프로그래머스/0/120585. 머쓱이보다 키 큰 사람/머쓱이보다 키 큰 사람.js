function solution(array, height) {
    var answer = 0;
    return answer = array.filter((element)=>element > height).length;
}