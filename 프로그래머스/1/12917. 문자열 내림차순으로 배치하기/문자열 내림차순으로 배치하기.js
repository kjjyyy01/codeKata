function solution(s) {
    var answer = '';
    console.log(s);


    answer = s.split('').sort().reverse().join('')

    return answer
}
console.log(solution('Zbcdefg'));