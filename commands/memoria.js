//comando q mostra quando de cpu e ram o bot ta usando
const Discord = require("discord.js")

module.exports.run = (bot, message, args) => {
    const status = new Discord.MessageEmbed()
        .setTitle('⚙ Status')
        .addField('__cpu__:', `**${(process.cpuUsage().system / 1024 / 1024).toFixed(2)}%**`)
        .addField('__ram__:', `**${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)}MB**`)
message.reply(status)
}