function solution(a, b) {  
    let X = String(a);
    let Y = String(b);
    let Z1 = [X,Y];
    let Z2 = [Y,X];
    let answer1 = Z1.join('');
    let answer2 = Z2.join('');
    if (Number(answer1) < Number(answer2)) { 
        return Number(answer2);
    } else { 
        return Number(answer1);
    }
    
}