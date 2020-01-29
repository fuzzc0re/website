//
// Copyright (c) 2019 Fuzznets. All rights reserved.
//

const fs = require('fs');
const path = require('path');

let p = path.join(__dirname, '..', 'build');
let files = fs.readdirSync(p);

for (let f = 0; f < files.length; f++) {
  fileName = p + '/' + files[f];
  if (files[f] !== 'static' && files[f] !== 'icons') {
    fs.renameSync(fileName, fileName.replace('.gz', ''));
  } else if (files[f] === 'static') {
    files_js = fs.readdirSync(p + '/' + files[f] + '/js');
    for (let f_js = 0; f_js < files_js.length; f_js++) {
      fileName_js = p + '/' + files[f] + '/js/' + files_js[f_js];
      fs.renameSync(fileName_js, fileName_js.replace('.gz', ''));
    }
    files_css = fs.readdirSync(p + '/' + files[f] + '/css');
    for (let f_css = 0; f_css < files_css.length; f_css++) {
      fileName_css = p + '/' + files[f] + '/css/' + files_css[f_css];
      fs.renameSync(fileName_css, fileName_css.replace('.gz', ''));
    }
  }
}
