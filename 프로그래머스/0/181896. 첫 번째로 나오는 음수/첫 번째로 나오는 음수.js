function solution(num_list) {
    let answer = 0;

    for (let i = 0; i < num_list.length; i++) {
        if (num_list[i] < 0) {
            answer = i;
            return answer;
        }
    }

    return -1;
}

// const solution = num_list => num_list.findIndex(v => v < 0)

// function solution(num_list) {
//     let a = num_list.filter(c=> {if(c<0) return c})
//     return num_list.indexOf(a[0])
// }