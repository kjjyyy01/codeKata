function solution(n) {
    let answer = '';

    for (let i = 1; i <= n; i++) {
        answer += i % 2 === 1 ? '수' : '박'
    }

    return answer;
}
console.log(solution(3));
console.log(solution(4));