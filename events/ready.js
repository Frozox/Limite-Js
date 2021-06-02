const fetch = require('node-fetch');
const { COLORS } = require('../util/textColor');
const { MESSAGES } = require('../util/constants');

module.exports.run = async (client) => {
    console.log(`${COLORS.FgYellow}-- READY EVENT --${COLORS.Reset}`);
    console.log(`${COLORS.Bright}${COLORS.FgCyan}${client.user.username} est lancé !${COLORS.Reset}`);
    console.log(`Update serveurs API...`);

    //Ajouter les serveurs manquant dans l'API
    await fetch(`${client.config.API_URL}/serveur/createifnotexists`, {
        method: 'POST',
        body: JSON.stringify(client.guilds.cache.map(guild => guild.id)),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(res => res.json())
        .then(json => console.log(`${COLORS.Bright}${COLORS.FgCyan}${json.message}${COLORS.Reset}`))
        .catch(() => {
            console.log(`${COLORS.Bright}${COLORS.FgRed}${MESSAGES.events.ready.fetchError}${COLORS.Reset}`);
        });

    console.log(`${COLORS.FgYellow}-----------------${COLORS.Reset}`);
}

module.exports.infos = MESSAGES.events.ready