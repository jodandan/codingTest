function solution(num_list) {
    var odd = [];
    var even = [];
    for (let i of num_list) { 
        if ( i%2 == 0) { 
            even.push(i);
        } else {
            odd.push(i);
        }
    }
    odd2 = odd.join('');
    even2 = even.join('');
    return result = Number(odd2) + Number(even2) 
}