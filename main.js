import chalk from 'chalk';
import boxen from 'boxen';
function write(text){
    process.stdout.write(text);
}
for(let i = 0; i<255; i++){
    write(chalk.bgRgb(i, i, i)(' '));
}
write('\n');
write(boxen(chalk.reset.italic('Hello text'), {
    margin: 3,
    padding: 3,
    title: 'title',
    titleAlignment: 'center',
    borderColor: 'red',
    borderStyle: 'round'
}));


import inquirer from 'inquirer';

inquirer
  .prompt([
    {type:'input', message: 'Whats your name?', name: 'name'},
    {type:'number', message: 'Whats your age?', name: 'age'},
    {type:'list', message: 'Whats your gender?', name: 'gender', choices: ['male', 'female', 'apache helicopter', 'other']},
    {
        type:'checkbox',
        message: 'Favourite foods?',
        name: 'foods',
        choices: [
            'pizza',
            'burger',
            {checked: true, value: 'stake'}
        ]
    },
    {type:'editor', name: 'haiku', message: 'write a haiku!'}
])
  .then((answers) => {
    console.log(answers);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

  
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

yargs(hideBin(process.argv))
  .command('serve [port]', 'start the server', (yargs) => {
    return yargs
      .positional('port', {
        describe: 'port to bind on',
        default: 5000
      })
  }, (argv) => {
    if (argv.verbose) console.info(`start server on :${argv.port}`)
    serve(argv.port)
  })
  .option('verbose', {
    alias: 'v',
    type: 'boolean',
    description: 'Run with verbose logging'
  })
  .parse()