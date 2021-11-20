const Discord = require('discord.js');
exports.run = async (client, message, args) => {

if(!message.member.roles.cache.has('Kullanabilecek Rol ID') && !message.member.hasPermission('ADMINISTRATOR') ) return message.channel.send('Bu kodu kullanmak için yeterli yetkin yok!')

 let kanal = args[0]
 if (!kanal) return message.channel.send("Bir Kanal ID'si Belirt")  

 client.channels.cache.get(kanal).join();

message.channel.send("Ses Kanalına Başarılı Bir Şekilde Bağlandım")
message.react('✅')
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["sesgir","ses-gir"],
  permLevel: 0
}
exports.help = {
  name: 'sesegir',
  description: "zewo",
  usage: 'zewo'
}