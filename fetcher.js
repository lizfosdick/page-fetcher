let args = process.argv;

const fetcher = function() {
  const url = args[2];
  const file = args[3];

  const fs = require('fs');
  
  const path = require('path')
  const request = require('request');

  request(url, (error, response, body) => {
    const content = body;
    const bytes = body.length;
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode); 
    console.log('body:', body); 
    fs.writeFile(file, content, err => {
      if (err) {
        console.error(err);
      }
    });
    console.log(`Downloaded and saved ${bytes} bytes to ${file}.`)
  });


}

fetcher(args);







