function solution(strArr) {
    let answer = [];
    return answer = strArr.map((element,index) => 
        index % 2 === 0 ? element.toLowerCase() : element.toUpperCase() );
}