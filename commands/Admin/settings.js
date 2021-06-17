const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');
const { MESSAGES } = require('../../util/constants');
const { parse, isInterger } = require('../../util/tools');

module.exports.run = async (client, prefix, message, args) => {
    if (args[1] != null) {
        if (args[0] == 'prefix') {
            if (args[1].length <= 2) {
                if (args[1].match(/^[a-z\^$%<>!.]{1,2}$/g)) {
                    await fetch(`${client.config.API_URL}/serveur/update/${message.guild.id}`, {
                        method: 'PATCH',
                        body: JSON.stringify({ prefix: args[1] }),
                        headers: { 'Content-Type': 'application/json' }
                    })
                        .then(res => {
                            if (res.status === 200) {
                                message.channel.send(parse(MESSAGES.commands.settings.prefix.succes, args[1]));
                                client.prefix.filter(self => self.key === message.guild.id)[0].val = args[1];
                            }
                        })
                        .catch(() => {
                            message.channel.send(MESSAGES.api.fetchErrorClient);
                        });
                }
                else {
                    await message.channel.send(MESSAGES.commands.settings.prefix.charerror);
                }
            }
            else {
                await message.channel.send(MESSAGES.commands.settings.prefix.lengtherror);
            }
        }
        //Edit dec
        else if (args[0] == 'deck') {
            if (isInterger(args[1])) {
                let newDeck = Number(args[1]);
                if (newDeck < client.config.BOT_DECK_MIN || newDeck > client.config.BOT_DECK_MAX) {
                    await message.channel.send(parse(MESSAGES.error.numberInterval, client.config.BOT_DECK_MIN, client.config.BOT_DECK_MAX));
                }
                else {
                    await fetch(`${client.config.API_URL}/serveur/update/${message.guild.id}`, {
                        method: 'PATCH',
                        body: JSON.stringify({ deck_cards: newDeck }),
                        headers: { 'Content-Type': 'application/json' }
                    })
                        .then(res => {
                            if (res.status === 200) {
                                message.channel.send(parse(MESSAGES.commands.settings.deck.succes, newDeck));
                            }
                        })
                        .catch(() => {
                            message.channel.send(MESSAGES.api.fetchErrorClient);
                        });
                }
            }
            else {
                await message.channel.send(MESSAGES.error.notValidInteger);
            }
        }
        else if (args[0] == 'rounds') {
            if (isInterger(args[1])) {
                let newRoundsWin = Number(args[1]);
                if (newRoundsWin < client.config.BOT_ROUNDS_WIN_MIN || newRoundsWin > client.config.BOT_ROUNDS_WIN_MAX) {
                    await message.channel.send(parse(MESSAGES.error.numberInterval, client.config.BOT_ROUNDS_WIN_MIN, client.config.BOT_ROUNDS_WIN_MAX));
                }
                else {
                    await fetch(`${client.config.API_URL}/serveur/update/${message.guild.id}`, {
                        method: 'PATCH',
                        body: JSON.stringify({ rounds_win: newRoundsWin }),
                        headers: { 'Content-Type': 'application/json' }
                    })
                        .then(res => {
                            if (res.status === 200) {
                                message.channel.send(parse(MESSAGES.commands.settings.rounds.succes, newRoundsWin));
                            }
                        })
                        .catch(() => {
                            message.channel.send(MESSAGES.api.fetchErrorClient);
                        });
                }
            }
            else {
                await message.channel.send(MESSAGES.error.notValidInteger);
            }
        }
        else if (args[0] == 'players') {
            if (isInterger(args[1])) {
                let newMaxPlayers = Number(args[1]);
                if (newMaxPlayers < client.config.BOT_PLAYERS_MIN || newMaxPlayers > client.config.BOT_PLAYERS_MAX) {
                    await message.channel.send(parse(MESSAGES.error.numberInterval, client.config.BOT_PLAYERS_MIN, client.config.BOT_PLAYERS_MAX));
                }
                else {
                    await fetch(`${client.config.API_URL}/serveur/update/${message.guild.id}`, {
                        method: 'PATCH',
                        body: JSON.stringify({ max_pl: newMaxPlayers }),
                        headers: { 'Content-Type': 'application/json' }
                    })
                        .then(res => {
                            if (res.status === 200) {
                                message.channel.send(parse(MESSAGES.commands.settings.players.succes, newMaxPlayers));
                            }
                        })
                        .catch(() => {
                            message.channel.send(MESSAGES.api.fetchErrorClient);
                        });
                }
            }
            else {
                await message.channel.send(MESSAGES.error.notValidInteger);
            }
        }
    }
    else if (args[0] == null) {
        //settings
        const serverInfo = await fetch(`${client.config.API_URL}/serveur/find/${message.guild.id}`)
            .then(res => res.json())
            .catch(() => {
                message.channel.send(MESSAGES.api.fetchErrorClient);
            });

        if (serverInfo) {
            const embed = new MessageEmbed()
                .setAuthor(client.user.username, client.user.avatarURL())
                .setDescription(parse(MESSAGES.commands.settings.embed.desc, serverInfo.prefix, serverInfo.deck_cards, serverInfo.rounds_win, serverInfo.max_pl));

            message.channel.send(embed);
        }
    }
    else {
        await message.channel.send(parse(MESSAGES.error.commandInvalidArguments, prefix, MESSAGES.commands.settings.infos.name));
    }
}

module.exports.infos = MESSAGES.commands.settings.infos