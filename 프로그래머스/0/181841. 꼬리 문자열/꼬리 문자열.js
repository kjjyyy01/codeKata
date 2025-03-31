function solution(str_list, ex) {
    let answer = '';
    
    return answer = str_list.filter((element)=>!element.includes(ex)).join("");
}