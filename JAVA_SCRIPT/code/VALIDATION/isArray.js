function isArray(object) {
    if (object.constructor === Array)
        return true;
    else return false;
}

var str = [1, 2, 3];
console.log(str);
if (isArray(str)) {
    console.log('Mảng hợp lệ');
} else {
    console.log('Mảng không hợp lệ');
}