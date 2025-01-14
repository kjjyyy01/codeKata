function solution(seoul) {
    var answer = '';
    
    var index = seoul.indexOf("Kim"); //"Kim"의 위치를 찾는다.
    
    answer = `김서방은 ${index}에 있다` ;
    
    
    return answer;
}
console.log(solution(["Jane","Kim"])); // 김서방은 1에 있다