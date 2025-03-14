function solution(money) {
    var answer = [];
    return answer = [
        Math.floor(money / 5500),
        money % 5500
    ];
}