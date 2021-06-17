exports.parse = function parse(str) {
    var args = [].slice.call(arguments, 1),
        i = 0;

    return str.replace(/%s/g, () => args[i++]);
}

exports.prefixParse = function prefixParse(str, prefix) {
    return str.replace(/%s/g, () => prefix);
}

exports.isInterger = function isInterger(str) {
    const number = Number(str);

    if (Number.isInteger(number)) {
        return true;
    }
    return false;
}