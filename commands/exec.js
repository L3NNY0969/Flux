const exec = require('child_process').exec;
exports.run = async (bot, msg, args = []) => {
    exec(`${args.join(' ')}`, (error, stdout) => {
        const response = (error || stdout);
        msg.channel.send(`Ran: ${args.join(" ")}\n${response}`, {code: "asciidoc", split: "\n"}).catch(console.error);
      });
}



exports.conf = {
    activated: true,
    aliases: [],
    permLevel: 10
  };
  
  exports.help = {
    name: "exec",
    description: "Exec some stuff.",
    usage: "exec",
  };