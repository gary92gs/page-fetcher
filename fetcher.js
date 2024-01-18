const request = require('request');
const fs = require('fs');

const params = {
  URL: process.argv[2],
  filepath: process.argv[3]
};

const fetchContent = (url, filepath) => {
  request(url, (error, response, body) => {
    if (error) console.log(error);
    writeContent(filepath,body);
  });
};

const writeContent = (filepath,body) => {
  console.log('insdeWriteContent');
  fs.writeFile(filepath,body,(err) => {
    if (err) throw err;
    //figure out how many bytes the file takes
    console.log(`Downloaded and saved ${body.length} bytes to ${filepath}`);
  })
};


fetchContent(params.URL, params.filepath);