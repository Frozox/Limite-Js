const dateformat = require('dateformat');

exports.MESSAGES = {
    commands: {
        api: {
            infos: {
                name: 'api',
                aliases: ['api'],
                category: 'info',
                desc: '_**%sapi** : Affiche les informations de l\'API._',
                cooldown: 3,
                isUserAdmin: false,
                args: false
            },
            embed: {
                desc: 'Informations de l\'API',
                author: 'Auteur',
                version: 'Version',
                library: 'Library',
                uptime: 'Uptime'
            }
        },
        help: {
            infos: {
                name: 'help',
                aliases: ['help', 'h'],
                category: 'info',
                desc: '_**%shelp** : Affiche la liste complète des commandes du bot.\n**%shelp <commandName>** : Affiche la description d\'une commande.\n\nAlias: **%sh**\n\nexemple:_\`\`\`%shelp api\`\`\`',
                cooldown: 3,
                isUserAdmin: false,
                args: true
            },
            embed: {
                desc: '_**%shelp** : Affiche la liste complète des commandes du bot.\n**%shelp <commandName>** : Affiche la description d\'une commande.\n\nAlias: **%sh**\n\nexemple:_\`\`\`%shelp api\`\`\`\n_Liste des commandes:_'
            }
        },
        infos: {
            infos: {
                name: 'infos',
                aliases: ['infos', 'info'],
                category: 'info',
                desc: '_**%sinfos** : Affiche les informations du Bot.\n\nAlias: **%sinfo**_',
                cooldown: 3,
                isUserAdmin: false,
                args: false
            },
            embed: {
                desc: 'Informations du Bot',
                author: {
                    field: 'Auteur',
                    value: process.env.npm_package_author_name
                },
                version: {
                    field: 'Version',
                    value: process.env.npm_package_version
                },
                library: {
                    field: 'Library',
                    value: 'Discord.js'
                },
                uptime: {
                    field: 'Uptime',
                    value: dateformat(new Date(), 'dd-mm-yyyy')
                }
            }
        }
    },
    events: {
        ready: {
            name: 'ready'
        },
        message: {
            name: 'message'
        },
        guildCreate: {
            name: 'guildCreate'
        },
        guildDelete: {
            name: 'guildDelete'
        }
    },
    api: {
        name: 'Limite-API',
        fetchErrorServer: `Limite-API is unreachable.`,
        fetchErrorClient: 'Une erreur est survenue, veuillez réessayer plus tard.'
    }
}

exports.parse = function parse(str) {
    var args = [].slice.call(arguments, 1),
        i = 0;

    return str.replace(/%s/g, () => args[i++]);
}

exports.prefixParse = function prefixParse(str, prefix) {
    return str.replace(/%s/g, () => prefix);
}