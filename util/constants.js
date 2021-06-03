const dateformat = require('dateformat');

exports.MESSAGES = {
    commands: {
        api: {
            infos: {
                name: 'api',
                aliases: ['api'],
                category: 'info',
                description: 'Affiché les informations de l\'API',
                cooldown: 3,
                usage: '',
                isUserAdmin: false,
                permissions: false,
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
        infos: {
            infos: {
                name: 'infos',
                aliases: ['infos', 'info'],
                category: 'info',
                description: 'Affiché les informations du Bot',
                cooldown: 3,
                usage: '',
                isUserAdmin: false,
                permissions: false,
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
                    value: 'Node.js'
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