const parseEvent = (event) => require(`../events/${event}`);
module.exports = function(bot) {
  bot.on('ready', () => parseEvent('ready')(bot));
  bot.on('message', parseEvent('msg'));
};