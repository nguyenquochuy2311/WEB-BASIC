function isEmpty(str) {
    str = str || null;
    return (typeof str == "undefined" || str == null);
}

var str = '';
console.log(str);
if (isEmpty(str)) {
    console.log('Rỗng');
} else {
    console.log('Có phần tử');
}