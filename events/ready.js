const fetch = require('node-fetch');
const { COLORS } = require('../util/textColor');
const { MESSAGES } = require('../util/constants');

module.exports.run = async (client) => {
    const allGuildsId = JSON.stringify(client.guilds.cache.map(guild => guild.id));

    console.log(`${COLORS.FgYellow}-- READY EVENT --${COLORS.Reset}`);
    console.log(`${COLORS.Bright}${COLORS.FgCyan}${client.user.tag} is started !${COLORS.Reset}`);
    console.log(`Updating guilds API...`);

    //Ajouter les serveurs manquant dans l'API
    await fetch(`${client.config.API_URL}/serveur/createifnotexists`, {
        method: 'POST',
        body: allGuildsId,
        headers: { 'Content-Type': 'application/json' }
    })
        .then(res => res.json())
        .then(json => console.log(`${COLORS.Bright}${COLORS.FgCyan}${json.message}${COLORS.Reset}`))
        .catch(() => {
            console.log(`${COLORS.Bright}${COLORS.FgRed}${MESSAGES.api.fetchErrorServer}${COLORS.Reset}`);
        });

    //Supprimer les serveurs fantome de L'API
    await fetch(`${client.config.API_URL}/serveur/deleteifnotexists`, {
        method: 'DELETE',
        body: allGuildsId,
        headers: { 'Content-Type': 'application/json' }
    })
        .then(res => res.json())
        .then(json => console.log(`${COLORS.Bright}${COLORS.FgCyan}${json.message}${COLORS.Reset}`))
        .catch(() => {
            console.log(`${COLORS.Bright}${COLORS.FgRed}${MESSAGES.api.fetchErrorServer}${COLORS.Reset}`);
        });
    console.log(`${COLORS.FgYellow}-----------------${COLORS.Reset}`);
}

module.exports.infos = MESSAGES.events.ready