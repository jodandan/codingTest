function solution(number) {
    var answer = 0;
    let sum = 0;
    var numberArray = [...number];
    for( let i = 0; i<numberArray.length; i++ ) { 
        sum = sum + Number(numberArray[i])
    }
    answer = sum % 9;
    return answer;
}