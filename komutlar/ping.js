const Discord = require('discord.js');
exports.run = async(client, message) => {
 
    message.channel.send(`Pingim : ` + client.ws.ping + `ms`);
    message.react('✅')
}
exports.conf = {
    enabled : true,
    guildOnly : false,
    aliases : ['ping'],
    permLevel : 0
}
exports.help = {
    name : 'ping',
    description : 'alencia',
    usage : 'ping'
}