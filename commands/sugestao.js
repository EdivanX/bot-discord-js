const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    let sug = args.slice(0).join(" ");
    if(!sug) return message.channel.send("Digite uma sugestão");

    let embed = new Discord.MessageEmbed()
    .setTitle(`Uma nova sugestão de ${message.author.username}`)
    .setDescription(`${sug}`)

    client.channels.cache.get("ID CANAL").send(embed).then(async message => {
        await message.react('✅');
        await message.react('❎');
    })
}
 