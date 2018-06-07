exports.run = async (bot, msg, args = []) => {
const { RichEmbed } = require("discord.js");
const Discord = require("discord.js");
const embed = new RichEmbed()
.setColor(15400990)
.setDescription(`Pong! Time - **${Date.now() - msg.createdTimestamp}ms** API Latency is **${Math.round(bot.ping)}ms**`)
msg.channel.send(embed)
}

exports.conf = {
    activated: true,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: "ping",
    description: "Get the bots latency.",
    usage: "ping",
  };