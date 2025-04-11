function solution(num_list) {
    var answer = 0;
    return answer = num_list.length >= 11 ? num_list.reduce((acc,element) => acc + element,0) : num_list.reduce((acc,element) => acc * element,1);
}