function isSlug(val) {
    var reg = /^[a-z0-9-_]+$/;
    return reg.test(val);
}

var str = 'hoc-lap-trinh-tai-freetuts-net';
console.log(str);
if (isURL(str)) {
    console.log('Slug hợp lệ');
} else {
    console.log('Slug không hợp lệ');
}