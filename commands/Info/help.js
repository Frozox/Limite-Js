const { MessageEmbed } = require('discord.js');
const { MESSAGES, prefixParse } = require('../../util/constants');

module.exports.run = async (client, prefix, message, args) => {
    const category = client.commands.map(x => x.infos.category).filter((val, index, self) => self.indexOf(val) === index).sort();

    if (args.length > 0) {
        const cmd = client.commands.get(args[0]) || client.commands.find(cmd => cmd.infos.aliases && cmd.infos.aliases.includes(args[0]));
        if (cmd) {
            const embed = new MessageEmbed()
                .setAuthor(client.user.username, client.user.avatarURL())
                .setDescription(prefixParse(cmd.infos.desc, prefix))
            await message.channel.send(embed);
        }
    }
    else {
        var embed = new MessageEmbed()
            .setAuthor(client.user.username, client.user.avatarURL())
            .setDescription(prefixParse(MESSAGES.commands.help.embed.desc, prefix))

        //Ajout des catégories et des commandes liées dans l'embed
        for (c in category) {
            const cmdsInCateg = client.commands.filter(self => self.infos.category === category[c]).map(x => x.infos.name).sort();
            embed.addField(category[c], cmdsInCateg, true)
        }

        await message.channel.send(embed);
    }
}

module.exports.infos = MESSAGES.commands.help.infos;