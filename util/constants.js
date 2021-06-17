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
                onlyForGuild: false,
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
                onlyForGuild: false,
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
                onlyForGuild: false,
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
        },
        settings: {
            infos: {
                name: 'settings',
                aliases: ['settings'],
                category: 'admin',
                desc: '_**%ssettings** : Affiche la liste des paramètres du serveur.\n**%ssettings prefix <prefix>** : Modifie le préfix du serveur.\n**%ssettings deck <nombre>** : Modifie la taille du deck de carte.\n**%ssettings rounds <nombre>** : Modifie le nombre de rounds maximal.\n**%ssettings players <nombre>** : Modifie le nombre de joueurs maximal.\n\nexemple:_\`\`\`%ssettings deck 7\`\`\`',
                cooldown: 3,
                isUserAdmin: true,
                onlyForGuild: true,
                args: true
            },
            prefix: {
                succes: 'Le nouveau préfix est maintenant **%s**.',
                charerror: 'Le préfix contient des caractères invalides.',
                lengtherror: 'Le préfix ne doit pas dépasser 2 caractères.'
            },
            deck: {
                succes: 'La taille du deck est désormais de **%s** cartes.'
            },
            rounds: {
                succes: 'Le nombre de manches maximales est désormais de **%s**.'
            },
            players: {
                succes: 'Le nombre maximal de joueurs est désomais de **%s**.'
            },
            embed: {
                desc: '_Préfix du serveur : **%s**\nTaille du deck de cartes : **%s**\nNombre de manches : **%s**\nNombre maximal de joueurs : **%s**_'
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
        fetchErrorServer: 'Limite-API is unreachable.',
        fetchErrorClient: 'Une erreur est survenue, veuillez réessayer plus tard.'
    },
    error: {
        adminPermissions: 'vos permissions sont insuffisantes pour exécuter cette commande.',
        onlyForGuild: 'cette commande n\'est exécutable que sur serveur.',
        commandInvalidArguments: 'Arguments invalides, **%shelp %s** pour plus d\'informations.',
        numberInterval: 'Le nombre doit être situé entre %s et %s compris.',
        notValidInteger: 'L\'argument doit être un entier valide.'
    }
}