const { MESSAGES } = require('../util/constants');

module.exports.run = async (client, message) => {
    const prefix = client.config.BOT_DEFAULT_PREFIX;

    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.infos.aliases && cmd.infos.aliases.includes(commandName));
    if (!command) return;

    command.run(client, message, args);
}

module.exports.infos = MESSAGES.events.message