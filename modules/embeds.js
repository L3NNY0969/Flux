module.exports = function(bot, msg) {
  bot.hex = 0xff0000; //Example Hex colour to export with your module.
  bot.embed = function(msg, colour, title, description) {
    return new Promise(function(resolve, reject) {
      if (!title) title = "";
      if (!description) description = "";
      msg.channel.send("", {embed: {
        color: colour,
        title: title,
        description: description,
        timestamp: new Date(),
        footer: {text: "Command successfully executed."}
      }}).catch(error => reject(error));
    });
  };

  bot.embedDM = function(bot, msg, colour, title, description, userID) {
    return new Promise(function(resolve, reject) {
      if (!title) title = "";
      if (!description) description = "";
      if (!userID) reject("No ID provided!");
      bot.users.get(userID).send("", {embed: {
        color: colour,
        title: title,
        description: description,
        timestamp: new Date(),
        footer: {text: "Command successfully executed."}
      }}).catch(error => reject(error));
    });
  };

  bot.embedID = function(msg, colour, title, description, channelID) {
    return new Promise(function(resolve, reject) {
      if (!title) title = "";
      if (!description) description = "";
      if (!channelID) reject("No ID provided!");
      msg.guild.channels.get(channelID).send("", {embed: {
        color: colour,
        title: title,
        description: description,
        timestamp: new Date(),
        footer: {text: "Command successfully executed."}
      }}).catch(error => reject(error));
    });
  };

  bot.embedGID = function(msg, colour, title, description, channelID) {
    return new Promise(function(resolve, reject) {
      if (!title) title = "";
      if (!description) description = "";
      if (!channelID) reject("No ID provided!");
      bot.channels.get(channelID).send("", {embed: {
        color: colour,
        title: title,
        description: description,
        timestamp: new Date(),
        footer: {text: "Command successfully executed."}
      }}).catch(error => reject(error));
    });
  };
};
