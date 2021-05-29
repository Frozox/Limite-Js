const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports.infos = {
    'name': 'api',
    'aliases': ['api'],
    'category': 'info',
    'description': 'Affiché les infos de l\'API',
    'cooldown': 3,
    'usage': '',
    'isUserAdmin': false,
    'permissions': false,
    'args': false
}

module.exports.run = async (client, message, args) => {
    const apiInfo = await fetch(client.config.API_URL)
        .then(res => res.json())
        .catch(() => {
            message.channel.send('Une erreur est survenue');
        });

    if (apiInfo) {
        const embed = new MessageEmbed()
            .setAuthor(client.user.username, client.user.avatarURL())
            .setDescription('Informations sur l\'API')
            .addField('Auteur', apiInfo.author, true)
            .addField('Version', apiInfo.version, true)
            .addField('Library', apiInfo.library, true)

        await message.channel.send(embed);
    }
}