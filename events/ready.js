const { COLORS } = require('../util/textColor');

module.exports.infos = {
    'name': 'ready'
}

module.exports.run = (client) => {
    console.log(`${COLORS.Bright}${COLORS.FgCyan}${client.user.username} est lancé !${COLORS.Reset}`);
}