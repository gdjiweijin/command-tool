module.exports = {
    command: 'console [log]',
    desc: 'console log',
    builder: (yargs) => yargs.default('log', 'default'),
    handler: (args) => {
        console.log(args.log)
    }
}