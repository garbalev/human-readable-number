module.exports = function toReadable (totalRent) {
    var a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
var b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
var number = parseFloat(totalRent).toFixed(2).split(".");
var num = parseInt(number[0]);
var digit = parseInt(number[1]);
//console.log(num);
if ((num.toString()).length > 9)  return 'overflow';
var n = ('000000000' + totalRent).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
var d = ('00' + digit).substr(-2).match(/^(\d{2})$/);;
if (!n) return; var str = '';
console.log(n);

str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) : '';
str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]])  : '';
str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
str += (n[5] != 0) ? (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) : '';

if(totalRent===0){
    return 'zero';
}
return str.slice(0,-1);

}


