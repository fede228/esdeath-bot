const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'close',
    aliases: ['close'],
    description: 'Закрывает канал',
    run: (client, message, args) => {
      const errorEmbed = require('../../Utils/error')
      if (!message.member.roles.cache.some(r => r.name == '🌈 ᴇᴠᴇɴᴛᴍᴀᴋᴇʀ') && !message.member.hasPermission('MANAGE_CHANNELS')) {
        return;
      }
      message.channel.updateOverwrite(message.channel.guild.roles.everyone, { SEND_MESSAGES: false });
      return message.delete();
    }}