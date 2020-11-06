const Discord = require('discord.js');

exports.run = async (client, message, args) => {

let canal = client.channels.cache.get('768981194523934800');
let wiki = args.join(' ');
if(!wiki) { 
return message.channel.send('Digite sua wiki');
}

let embed = Discord.MessageEmbed()
.setAuthor(`Nova wiki de ${message.author}`, message.author.avatarURL({dynamic : true}))
.setTitle('Wiki:')
.setDescription(wiki)
.setTimestamp()
.setFooter('✔️- gostou | ✖️- não gostou')

canal.send(embed).then(m => {
m.react("✔️")
m.react("✖️")
})
message.channel.send('Wiki enviado com sucesso!')
}