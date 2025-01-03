function solution(arr) {
    //최소값 지정
    var minArr = Math.min(...arr);
    //최소값을 제거한 배열 생성
    var rmArr = arr.filter(element => element !== minArr);
    // if 배열이 비어있는 경우, 배열에 -1을, 배열이 비어있지 않은 경우 rmArr 반환
    return rmArr.length === 0 ? [-1] : rmArr;
}
console.log(solution([4, 3, 2, 1]));
console.log(solution([10]));