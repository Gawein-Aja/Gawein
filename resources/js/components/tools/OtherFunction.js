

export const joinClassnames = () => {
    for (var _len = arguments.length, classnames = new Array(_len), _key = 0; _key < _len; _key++) {
        classnames[_key] = arguments[_key];
    }

    return classnames.filter(function (i) {
        return i;
    }).join(" ");
}
