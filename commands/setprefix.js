const Discord = require('discord.js')

exports.run = async (bot, message, args) => {
  if(message.member.permissions.has("MANAGE_GUILD")) {
    let conferir = await bot.Database.Guilda.findOne({
      "guild_id": message.guild.id
    })  
    
    let erroEmbed = new Discord.MessageEmbed()
      .setColor("#00FFFF")
      .setTimestamp()
      .setTitle("Adicionar novo prefixo!")
      .setDescription("Use: "+conferir.prefixo+"prefixo <novo prefixo>")
    
    if(!args[0]) return message.channel.send(erroEmbed)
    
    let prefixoEmbed = new Discord.MessageEmbed()
      .setColor('#00FFFF')
      .setTitle("Prefixo setado!")
      .setDescription("Prefixo setado para "+args[0])
      .setTimestamp()
    
    conferir.prefixo = args[0]
    conferir.save()
  
    message.channel.send(prefixoEmbed)
    
  } else {
    message.channel.send("Você precisa da permissão de ``Gerenciar o servidor``")
  }  
}