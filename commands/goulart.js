const Discord = require('discord.js')

exports.run = async (bot, message, args) => {

  if(!args⦍0⦐) return message.channel.send(":sad_cat4: escreva algo para o goularte falar.")
  
  let msg = args.slice(0).join(" ")

message.channel.createWebhook('goularte', {
avatar: 'https://cdn.discordapp.com/attachments/757624006391234789/757718528450232346/goularte.jpg'}).then(w => {
w.send(msg)
})
message.channel.send("comando feito pelo `@!   P a t i n ™#0001` se for usar em seu bot deixe os creditos no suporte do bot ou no comando <a:aYellowTriste:>")
  message.delete()
}