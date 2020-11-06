const Discord = require('discord.js');
exports.run = async (client, message, args) => {
  let card = new Discord.MessageEmbed()
  .setColor('DARKCYAN')
  .setTitle('Fecha canal')
  .setDescription('Você deseja realmente dar lock neste canal?')
message.channel.send(card).then(msg => {

  msg.react('✔') 

  const filtro = (reacao, usuario) => reacao.emoji.name === '✔' && usuario.id === message.author.id; 
  const coletor = msg.createReactionCollector(filtro);

  coletor.on('collect', () => { 

    let card2 = new Discord.MessageEmbed()
    .setTitle('fechado')
    .setDescription('Canal fechado com sucesso!')
    .setColor('DARKCYAN')

    msg.edit(card2);
  
      if (!client.lockit) client.lockit = [];
      if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("**❌ Ops... ** você não tem permissões para isto ");  message.channel.createOverwrite(message.guild.id, {
              SEND_MESSAGES: false  
      })

     
     
      })
  }
                                
                                )};