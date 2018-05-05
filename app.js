const Discord = require("discord.js");
const bot = new Discord.Client();
const FileSystem = require("fs");

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.settings = require("./configuration/settings.js");
require("./modules/essentialFunctions.js")(bot);
require("./modules/essentialEmbeds.js")(bot);
bot.login(bot.settings.token);

FileSystem.readdir("./commands/", function(error, commands) {
  if (error) return console.error(error.stack);
  console.log(`Going to load: ${commands.length} commands!`);
  commands.forEach(function(file) {
    if (!file.endsWith(".js")) return;
    let commandModule = require(`./commands/${file}`);
    bot.commands.set(commandModule.help.name, commandModule);
    console.log(`Command activated: ${commandModule.help.name}`);
    commandModule.conf.aliases.forEach(function(alias) {
        bot.aliases.set(alias, commandModule.help.name);
    });
  });
});

FileSystem.readdir("./events/", function(error, events) {
  if (error) return console.error(error.stack);
  console.log(`Going to load: ${events.length} events!`);
  events.forEach(function(file) {
    if (!file.endsWith(".js")) return;
    let eventModule = require(`./events/${file}`);
    console.log(`Loaded Event: ${eventModule.eventName}`);
    bot.on(eventModule.eventName, eventModule.eventFunc);
  });
});