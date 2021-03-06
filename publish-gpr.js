const { writeFileSync, readFileSync } = require('fs');

const file = readFileSync('./package.json', {
  encoding: 'utf-8',
});

const json = JSON.parse(file);

json.name = '@stylelist94/react-third-party-login';

writeFileSync('./package.json', JSON.stringify(json, undefined, 2));
