const { readdirSync } = require('fs')
const { COLORS } = require('./textColor');

module.exports = {
    //Chargement des commandes
    loadCommands: (client, cmdDir = './commands/') => {
        console.log(`${COLORS.Bright}COMMANDS LOADING:${COLORS.Reset}`);
        readdirSync(cmdDir).forEach(subCmdDir => {
            readdirSync(cmdDir + subCmdDir).filter(files => files.endsWith(".js")).forEach(command => {
                const reqCommand = require(`../${cmdDir}/${subCmdDir}/${command}`);
                client.commands.set(reqCommand.infos.name, reqCommand);
                console.log(`${COLORS.Bright}${COLORS.FgGreen}[OK]${COLORS.FgWhite} - ${reqCommand.infos.name}${COLORS.Reset}`);
            })
        });
    },
    //Chargement des events
    loadEvents: (client, evtDir = "./events/") => {
        console.log(`${COLORS.Bright}EVENTS LOADING:${COLORS.Reset}`);
        readdirSync(evtDir).filter(files => files.endsWith(".js")).forEach(event => {
            const reqEvent = require(`../${evtDir}/${event}`);
            client.on(reqEvent.infos.name, reqEvent.run.bind(null, client));
            console.log(`${COLORS.Bright}${COLORS.FgGreen}[OK]${COLORS.FgWhite} - ${reqEvent.infos.name}${COLORS.Reset}`);
        })
    }
}