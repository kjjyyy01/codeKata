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

 // for(let i = 0; i < num_list.length; i++) {
 //        if(num_list[i] < 0) {
 //            answer = i;
 //        }else {
 //            answer = -1;
 //        }
 //    }