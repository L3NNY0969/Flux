const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require("fs");

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.settings = require("./settings/config.js");
require("./modules/functions.js")(bot);
require("./modules/embeds.js")(bot);
bot.login(bot.settings.token);

fs.readdir("./commands/", function(error, commands) {
  return new Promise(function(resolve, reject) {
    if (error) return reject(error.stack);
    commands.forEach(function(file) {
      if (!file.endsWith(".js")) return;
      let commandModule = require(`./commands/${file}`);
      bot.commands.set(commandModule.help.name, commandModule);
      console.log(`[Command activated] :: ${commandModule.help.name}`);
      commandModule.conf.aliases.forEach(function(alias) {
        bot.aliases.set(alias, commandModule.help.name);
      });
      resolve();
    });
  });
});

fs.readdir("./events/", function(error, events) {
  return new Promise(function(resolve, reject) {
    if (error) return reject(error.stack);
    events.forEach(function(file) {
      if (!file.endsWith(".js")) return;
      let eventModule = require(`./events/${file}`);
      let eventName = file.toString().split(".")[0];
      console.log(`[Event activated] :: ${eventName}`);
      bot.on(eventName, (...params) => eventModule.run(bot, ...params));
      resolve();
    });
  });
});