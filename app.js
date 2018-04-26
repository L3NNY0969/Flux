const Discord = require("discord.js");
const bot = new Discord.Client();
const FileSystem = require("fs");

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.settings = require("./configuration/settings.js");
require("./modules/eventParser.js")(bot);
require("./modules/essentialFunctions.js")(bot);
require("./modules/essentialEmbeds.js")(bot);
bot.login(bot.settings.important.Token);

FileSystem.readdir("./commands/", function(error, commands) {
    if (error) return console.error(error.message);
    commands.forEach(function(file) {
        if (!file.endsWith(".js")) return;
        let commandModule = require(`./commands/${file}`);
        bot.commands.set(commandModule.help.name, commandModule);
        console.log(`Command activated: ${commandModule.help.name}`);
        commandModule.conf.aliases.forEach(function(alias) {
            bot.aliases.set(alias, commandModule.help.name);
        });
        console.log(`I have successfully loaded: ${commands.length} commands!`);
    });
});