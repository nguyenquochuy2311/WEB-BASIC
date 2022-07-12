function inArray(needle, haystack) {
    var i = haystack.length;
    while (i >= 0) {
        if (haystack[i] === needle) {
            return true;
        }
        i--;
    }
    return false;
}

var str = [1, 2, 3];
let a = 4;
console.log(str);
console.log(a);
if (inArray(a, str)) {
    console.log(`Tồn tại ${a} trong mảng`);
} else {
    console.log(`Không có ${a} trong mảng`);
}