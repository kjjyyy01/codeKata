function solution(num_list) {
    let answer = 0;
    
    const evenNum = num_list.filter((num) => num % 2 === 1).join("");
    const oddNum = num_list.filter((num) => num % 2 === 0).join("");
    
    return answer = Number(evenNum) + Number(oddNum);
}