const { MessageEmbed } = require('discord.js');
const { MESSAGES } = require('../../util/constants');

module.exports.run = async (client, message, args) => {
    const embed = new MessageEmbed()
        .setAuthor(client.user.username, client.user.avatarURL())
        .setDescription(MESSAGES.commands.infos.embed.desc)
        .addField(MESSAGES.commands.infos.embed.author.field, MESSAGES.commands.infos.embed.author.value, true)
        .addField(MESSAGES.commands.infos.embed.version.field, MESSAGES.commands.infos.embed.version.value, true)
        .addField(MESSAGES.commands.infos.embed.library.field, MESSAGES.commands.infos.embed.library.value, true)
        .addField(MESSAGES.commands.infos.embed.uptime.field, MESSAGES.commands.infos.embed.uptime.value, true);

    await message.channel.send(embed);
}

module.exports.infos = MESSAGES.commands.infos.infos