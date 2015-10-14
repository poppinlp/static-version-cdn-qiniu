var cdn = require('./adapter.js')({
    bucket: 'foobar',
    ak: 'xxxxxxxx',
    sk: 'xxxxxxxx'
});

console.log(cdn.toString());
