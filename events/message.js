const { MESSAGES } = require('../util/constants');

module.exports.run = async (client, message) => {
    var prefix;

    //Récupérer le préfix du serveur
    if (message.guild) {
        prefix = client.prefix.filter(self => self.key === message.guild.id).map(x => x.val)[0];
    }
    else {
        prefix = client.config.BOT_DEFAULT_PREFIX;
    }

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    var args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.infos.aliases && cmd.infos.aliases.includes(commandName));
    if (!command) return;

    if (message.guild) {
        //Permission commande admin
        if (command.infos.isUserAdmin && !message.guild.member(message.author).hasPermission('ADMINISTRATOR')) {
            await message.channel.send(`${message.author} ${MESSAGES.error.adminPermissions}`);
            return;
        };
    }
    else {
        //Commande uniquement pour serveur ?
        if (command.infos.onlyForGuild) {
            await message.channel.send(`${message.author} ${MESSAGES.error.onlyForGuild}`);
            return;
        };
    }

    //Persmissions arguments
    if (command.infos.args === false) { args = null }

    command.run(client, prefix, message, args);
}

module.exports.infos = MESSAGES.events.message