function solution(my_string) {
    let answer = '';
    let k = ["a","e","i","o","u"];
    
    const arrMyString = [...my_string];
    const filteredMyString = arrMyString.filter((element) => !k.includes(element)).join("");
    
    return answer = filteredMyString;
}