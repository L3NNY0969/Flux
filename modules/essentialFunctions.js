module.exports = (bot) => {
    bot.reload = command => {
      return new Promise((resolve, reject) => {
        try {
          delete require.cache[require.resolve(`../commands/${command}`)];
          let cmd = require(`../commands/${command}`);
          bot.commands.delete(command);
          bot.aliases.forEach((cmd, alias) => {
            if (cmd === command) bot.aliases.delete(alias);
          });
          bot.commands.set(command, cmd);
          cmd.conf.aliases.forEach(alias => {
            bot.aliases.set(alias, cmd.help.name);
          });
          resolve();
        } catch (e){
          reject(e);
        }
      });
    };

    bot.checkMemberRole = async function(msg, memberID, roleName) {
      let roleBoolean = false;
      msg.guild.fetchMember(memberID).then(function(m) {
          if (m.roles.has(roleName.id)) roleBoolean = true;
      });
      return roleBoolean;
    }
    
    
    bot.permission = function(msg) {
      let permissionLevel = 0;
      let moderatorRoleName = bot.settings.modRole;
      let botOwnerID = bot.settings.owner;
      let moderatorRole = msg.guild.roles.find("name", moderatorRoleName);
      if (msg.member == null || msg.member == undefined) permissionLevel = 0;
      if (moderatorRole && bot.checkMemberRole(msg, msg.author.id, moderatorRole)) permissionLevel = 2;
      if (msg.member.id == botOwnerID) permissionLevel = 10;
      return permissionLevel;
    }


};
