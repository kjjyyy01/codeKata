function solution(sides) {
    var answer = 0;
    const bigestSide = Math.max(...sides)
    const sumOtherSides = sides.reduce((acc, side) => acc+side,0) - bigestSide
    
    return answer = bigestSide < sumOtherSides ? 1 : 2;
}