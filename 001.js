//Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
//8kyu, strings
//45385593107843568
//01011110001100111
function fakeBin(x) {
    let result = ''
    x.split('').forEach(function(c) {
        // console.log(c);
        if (c < 5) {
            result = result + '0'
        } else {
            result = result + '1'
        }
        // return (c < 5 ? result + '0' : result + '1' )
    });
    return result;  
}
fakeBin(45385593107843568);

function fakeBinFinal(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}
fakeBinFinal(45385593107843568);
