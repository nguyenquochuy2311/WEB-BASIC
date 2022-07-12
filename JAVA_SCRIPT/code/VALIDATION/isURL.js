function isURL(url) {
    if (url == "" || url == null)
        return false;

    url = url.trim();

    if (url.indexOf(" ") != -1)
        return false;

    var RegExp = /^http(s)?:\/\/[\w|\-]+(\.[^\.]+)+$/i;

    if (RegExp.test(url)) {
        return true;
    } else {
        return false;
    }
}

var str = 'https://freetuts.net/';
console.log(str);
if (isURL(str)) {
    console.log('URL hợp lệ');
} else {
    console.log('URL không hợp lệ');
}