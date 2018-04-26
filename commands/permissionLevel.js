exports.run = function(bot, msg) {
  bot.embed(msg, bot.hex, "Fetched your permission level:", `Your permission level is: ${bot.permission(msg)}`);
}

exports.help = {
  name: "permissions",
  usage: "permission",
  description: "Fetches your permission level"
};

exports.conf = {
  activated: true,
  aliases: ["myperms", "perm"],
  permLevel: 0
  }
