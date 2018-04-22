const aapt = require('./index');

aapt('./app.apk')
  .then(res => {
    // console.log(res);
  })
  .catch(err => {
    console.log(err);
  });
