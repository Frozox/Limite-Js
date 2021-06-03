const fetch = require('node-fetch');
const { COLORS } = require('../util/textColor');
const { MESSAGES } = require('../util/constants');

module.exports.run = async (client, guild) => {
    console.log(`${COLORS.FgYellow}-- GUILD DELETE EVENT --${COLORS.Reset}`);
    console.log(`${client.user.tag} leave ${guild.name}(${guild.id})`);
    console.log(`Adding the guild to API...`);

    //Supression du serveur de L'API
    await fetch(`${client.config.API_URL}/serveur/delete/${guild.id}`, {
        method: 'DELETE'
    })
        .then(res => res.json())
        .then(json => console.log(`${COLORS.Bright}${COLORS.FgCyan}${json.message}${COLORS.Reset}`))
        .catch(() => {
            console.log(`${COLORS.Bright}${COLORS.FgRed}${MESSAGES.api.fetchErrorServer}${COLORS.Reset}`);
        });
    console.log(`${COLORS.FgYellow}------------------------${COLORS.Reset}`);
}

module.exports.infos = MESSAGES.events.guildDelete