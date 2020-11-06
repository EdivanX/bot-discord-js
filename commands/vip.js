const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
        const user = message.mentions.members.first();
        if (!user) return message.channel.send('Falta um usuário');
        const role = message.mentions.roles.first();
        if (!role) return message.channel.send('Função ausente');
        user.roles.add(role);
        return message.channel.send(`O usuário **${user}** ganhou um vip permanentemente.`)
    }
 