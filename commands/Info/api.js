const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');
const { MESSAGES } = require('../../util/constants');

module.exports.run = async (client, _, message) => {
    const apiInfo = await fetch(client.config.API_URL)
        .then(res => res.json())
        .catch(() => {
            message.channel.send(MESSAGES.api.fetchErrorClient);
        });

    if (apiInfo) {
        const embed = new MessageEmbed()
            .setAuthor(client.user.username, client.user.avatarURL())
            .setDescription(MESSAGES.commands.api.embed.desc)
            .addField(MESSAGES.commands.api.embed.author, apiInfo.author, true)
            .addField(MESSAGES.commands.api.embed.version, apiInfo.version, true)
            .addField(MESSAGES.commands.api.embed.library, apiInfo.library, true)
            .addField(MESSAGES.commands.api.embed.uptime, apiInfo.uptime, true);

        await message.channel.send(embed);
    }
}

module.exports.infos = MESSAGES.commands.api.infos