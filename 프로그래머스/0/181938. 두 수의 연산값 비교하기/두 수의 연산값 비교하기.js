function solution(a, b) {
    let X = a;
    let X_1 = 2*a;
    let Y = b;
    
    let X1 = String(X);
    let X2 = String(Y);
    
    let answer1 = [X,Y];
    let answer_1 = answer1.join('');
    if ( Number(answer_1) < Number(X_1 * Y)) { 
        return Number(X_1*Y);
    } else { 
        return Number(answer_1);
    }
}