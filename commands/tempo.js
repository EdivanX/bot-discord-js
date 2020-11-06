const weather = require('weather-js');
const discord = require('discord.js')




//..
module.exports = {
  name: "terra",
  description: "busca informações do tempo em um lugar",
  category: "info",
  usage: "z?tempo < cidade>",
  run: (client, message, args) => {
    
    
    if(!args.length) {
      return message.channel.send("Por favor, dê a localização do clima")
    }
    
 weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
try {
 
let embed = new discord.MessageEmbed()
.setTitle(`Weather - ${result[0].location.name}`)
.setColor("#ff2050")
.setDescription("As unidades de temperatura podem ser diferentes em algum momento")
.addField(".Temperatura", `${result[0].current.temperature} Celcius`, true)
.addField("Sky Text", result[0].current.skytext, true)
.addField("Umidade.", result[0].current.humidity, true)
.addField("Velocidade do vento", result[0].current.windspeed, true)//What about image
.addField("Tempo de Observação", result[0].current.observationtime, true)
.addField("Exibição de vento", result[0].current.winddisplay, true)
.setThumbnail(result[0].current.imageUrl);
   message.channel.send(embed)
} catch(err) {
  return message.channel.send("Incapaz de obter os dados de determinado local ")
}
});   
    //LETS CHECK OUT PKG
    
  }
}