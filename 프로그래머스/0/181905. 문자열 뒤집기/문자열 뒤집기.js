function solution(my_string, s, e) {
    var answer = '';
    var my_string_array = [...my_string];
    for (let i = s, j = e ; i<j; i++,j--) {
        const tmp = my_string_array[i];
        my_string_array[i] = my_string_array[j];
        my_string_array[j] = tmp;
    }
    return my_string_array.join('');
}