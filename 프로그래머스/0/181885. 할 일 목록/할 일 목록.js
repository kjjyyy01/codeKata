function solution(todo_list, finished) {
    let answer = [];
    return answer = todo_list.filter((todo,index)=>!finished[index]);
}