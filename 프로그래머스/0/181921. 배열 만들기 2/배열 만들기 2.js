function solution(l, r) {
    let answer = [];
    for(let i = l; i<=r; i ++) {
        if([...String(i)].every(c => c === '0' || c === '5')){
        answer.push(i);
    } 
}
    return answer.length ? answer : [-1];
}