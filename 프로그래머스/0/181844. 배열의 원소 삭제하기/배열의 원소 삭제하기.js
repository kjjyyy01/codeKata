function solution(arr, delete_list) {
    var answer = [];
    return answer = arr.filter((num)=>!delete_list.includes(num));
}