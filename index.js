const { Client, Collection } = require('discord.js');
const { loadCommands, loadEvents } = require('./util/loader');

const client = new Client();
client.config = require('./config.json');
['commands', 'cooldowns'].forEach(x => client[x] = new Collection());

loadCommands(client);
loadEvents(client);

client.login(client.config.BOT_TOKEN);