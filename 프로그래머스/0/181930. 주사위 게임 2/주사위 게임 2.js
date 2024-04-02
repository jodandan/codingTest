function solution(a, b, c) {
    var answer = 0;
    var answer2 = 0;
    var answer3 = 0;
    if ( a == b && b == c && a == c ){ 
        return answer2 = (a + b + c)*(a**2 + b**2 + c**2)*(a**3 + b**3 + c**3 );
    } 
    if ( a === b || b === c || a === c ) { 
        return answer3 = (a + b + c)*(a**2 + b**2 + c**2);
    }
    return a+b+c
}