var loadImg = function (src) {
    return new Promise(function (resolve, reject) {
        var img = document.createElement('img');
        img.onload = function () {
            resolve(img);
        };
        img.onerror = function () {
            var err = new Error("\u56FE\u7247\u52A0\u8F7D\u5931\u8D25 ".concat(src));
            reject(err);
        };
        img.src = src;
    });
};
