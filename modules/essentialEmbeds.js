module.exports = (bot, msg) => {
  bot.hex = 0xff0000;
  bot.embed = async function(msg, colour, title, description) {
    try {
      await msg.channel.send("", {embed: {
        author: {
          name: msg.author.username,
          icon_url: msg.author.avatarURL
        },
        color: colour,
        title: title,
        description: description,
        timestamp: new Date(),
        footer: {
          text: "Command executed!"
        }
      }});
    } catch(e) {
    console.error(e);
    }
  }

  bot.embedID = async function(msg, id, colour, title, description) {
    if (!id) return console.log("Invalid embed construction, required to have a channel id to send to.");
    try {
      await msg.guild.channels.get(id).send("", {embed: {
        author: {
          name: msg.author.username,
          icon_url: msg.author.avatarURL
        },
        color: colour,
        title: title,
        description: description,
        timestamp: new Date(),
        footer: {
          text: "Command executed!"
        }
      }});
    } catch(e) {
      console.error(e);
    }
  }

  bot.embedDM = async function(msg, userid, colour, title, description) {
    if (!userid) return console.log("Invalid embed construction, required to have a user id to send to.");
    try {
      await msg.guild.members.get(userid).send("", {embed: {
        author: {
          name: msg.author.username,
          icon_url: msg.author.avatarURL
        },
        color: colour,
        title: title,
        description: description,
        timestamp: new Date(),
      }});
    } catch(e) {
      console.error(e);
    }
  }

  bot.embedGID = async function(bot, msg, channelid, colour, title, description) {
    if (!channelid) return console.log("Invalid embed construction, required to have a channel id to send to.");
    try {
      await bot.channels.get(channelid).send("", {embed: {
        author: {
          name: msg.author.username,
          icon_url: msg.author.avatarURL
        },
        color: colour,
        title: title,
        description: description,
        timestamp: new Date(),
      }});
    } catch(e) {
      console.error(e);
    }
  }
};