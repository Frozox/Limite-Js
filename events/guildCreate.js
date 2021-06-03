const fetch = require('node-fetch');
const { COLORS } = require('../util/textColor');
const { MESSAGES } = require('../util/constants');

module.exports.run = async (client, guild) => {
    console.log(`${COLORS.FgYellow}-- GUILD CREATE EVENT --${COLORS.Reset}`);
    console.log(`${client.user.tag} join ${guild.name}(${guild.id})`);
    console.log(`Adding the guild to API...`);

    //Ajouter le serveur à L'API
    await fetch(`${client.config.API_URL}/serveur/create`, {
        method: 'POST',
        body: JSON.stringify({ server_id: guild.id }),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(res => res.json())
        .then(json => console.log(`${COLORS.Bright}${COLORS.FgCyan}${json.message}${COLORS.Reset}`))
        .catch(() => {
            console.log(`${COLORS.Bright}${COLORS.FgRed}${MESSAGES.api.fetchErrorServer}${COLORS.Reset}`);
        });
    console.log(`${COLORS.FgYellow}------------------------${COLORS.Reset}`);
}

module.exports.infos = MESSAGES.events.guildCreate