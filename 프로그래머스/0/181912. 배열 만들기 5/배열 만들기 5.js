function solution(intStrs, k, s, l) {
    var answer = [];
    for (let i = 0; i<intStrs.length; i++) {
        let int = intStrs[i].slice(s, s+l);
        if (Number(int) > k) { 
            answer.push(Number(int));
        }
    }
    return answer;
}