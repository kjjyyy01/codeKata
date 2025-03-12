function solution(my_string) {
    var answer = '';
    
    //문자열을 배열로만들고, 배열을 reverse로 뒤집고, join으로 문자열로
    answer = Array.from(my_string).reverse().join('')
    
    return answer;
}