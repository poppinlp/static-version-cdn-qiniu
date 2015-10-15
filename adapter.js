module.exports = function (config) {
    var qiniu = require('qiniu'),
        bucket = config.bucket,
        prefix = config.prefix,
        ak = config.ak,
        sk = config.sk;

    qiniu.conf.ACCESS_KEY = ak;
    qiniu.conf.SECRET_KEY = sk;

    return function (localFile, cb) {
        var token = (new qiniu.rs.PutPolicy(bucket)).token(),
            extra = new qiniu.io.PutExtra();

        qiniu.io.putFile(token, prefix + localFile, localFile, extra, function (err, ret) {
            err ? cb(ret) : cb('');
        });
    };
};
