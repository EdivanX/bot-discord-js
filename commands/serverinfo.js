const Discord = require('discord.js')
const moment = require('moment')
moment.locale('pt-br')

exports.run = async (bot, message, args) => {
  
    let region = {
    "brazil": "Brasil",
    "eu-central": "Central Europe",
        "singapore": "Singapore",
        "us-central": "U.S. Central",
        "sydney": ":Sydney",
        "us-east": "U.S. East",
        "us-south": "U.S. South",
        "us-west": "U.S. West",
        "eu-west": "Western Europe",
        "vip-us-east": "VIP U.S. East",
        "london": "London",
        "amsterdam": "Amsterdam",
        "hongkong": "Hong Kong",
        "russia": "Russia",
        "southafrica": "South Africa"
  };    
  
  let guildaid = bot.guilds.cache.get(args[0]) || message.guild
  
  let serverinfo = new Discord.MessageEmbed()
  .setTitle("Informações do Servidor")
  .setThumbnail(guildaid.iconURL())
  .setDescription("Veja abaixo algumas informações sobre nosso servidor:")
  .addField("ID do servidor:", `${guildaid.id}`)
  .addField("Criador:", `${guildaid.owner}`)
  .addField("Localização:", `${region[guildaid.region]}`)
  .addField("Membros:", `${guildaid.memberCount}`)
  .addField("Canais",`${message.guild.channels.cache.size}`)
  .addField('Criado em', `${moment(guildaid.createdAt).format('LLL')}`)
  .addField('Entrei aqui em',`${moment(message.member.joinedAt).format('LLL')}`)
  .setFooter(`Comando solicitado por ${message.author.tag}`)

message.channel.send(serverinfo).then

await message.channel.send(`**Digite ${config.prefix}help para saber todos os comandos!**`)

  }