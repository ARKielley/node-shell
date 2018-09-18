const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');
const curl = require('./curl');

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const [cmd, arg] = data.toString().trim().split(' ');
  if (cmd === 'pwd') pwd();
  else if (cmd === 'ls') ls();
  else if (cmd === 'cat' && arg !== undefined) cat(arg);
  else if (cmd === 'curl' && arg !== undefined) curl(arg);
  process.stdout.write('You typed: ' + cmd);

  process.stdout.write('\nprompt > ');
});

