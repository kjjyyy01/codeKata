function solution(left, right) {
    var answer = 0;

    //Number.isInteger 정수인지 판별하는 메서드
    //Math.sqrt(): 제곱근을 계산해주는 메서드
    //완전 제곱수는 약수의 개수가 홀수개, 정수 판별이 나오면 약수는 홀수 개 > 빼기
    for (let i = left; i <= right; i++) {
        answer = Number.isInteger(Math.sqrt(i)) ? answer - i : answer + i
    }

    return answer;
}
console.log(solution(13, 17));
console.log(solution(24, 27));