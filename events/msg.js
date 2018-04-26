module.exports = msg => {
    let bot = msg.client;
    if (msg.author.bot) return;
    if (!msg.content.startsWith(bot.settings.prefix)) return;
    const command = msg.content.toLowerCase().split(" ")[0].slice(bot.settings.prefix.length);
    const args = msg.content.split(" ").slice(1);
    const permission = bot.permission(msg);
    
    let convertedCommand;
    if (bot.commands.has(command)) {
        convertedCommand = bot.commands.get(command);
    } else if (bot.aliases.has(command)) {
        convertedCommand = bot.commands.get(bot.aliases.get(command));
    }
  
    if (convertedCommand && convertedCommand.conf.activated != true)
      return msg.reply("I apologise but this command has been disabled by the bot creator");
  
    if (convertedCommand) {
      if (permission < convertedCommand.conf.permLevel) return;
      convertedCommand.run(bot, msg, args, permission);
    }
  };