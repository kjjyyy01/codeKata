function solution(array) {
    var answer = 0;
    return answer = array.sort((a, b) => b - a).at(Math.floor(array.length / 2));
}