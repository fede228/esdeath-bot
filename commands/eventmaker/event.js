'use strict';

const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'event',
  aliases: ['event'],
  description: 'Мероприятие " Числа "',

  run: (client, message, args) => {
    const errorEmbed = require('../../Utils/error')
    if (!message.member.roles.cache.some(r => r.name == '🌈 ᴇᴠᴇɴᴛᴍᴀᴋᴇʀ') && !message.member.hasPermission('ADMINISTRATOR')) {
        return;
      }
      
      const Time = args[0];
      if (!Time) {
        return message.channel.send(errorEmbed(message.client, 'Вы не указали время для окончания мероприятия.'))
      }

      const Money = args[1];
      if (!Money) {
        return message.channel.send(errorEmbed(message.client, 'Вы не указали количество монет.'))
      }



      message.reply(
        new MessageEmbed()
          .setColor('#d8901b')
          .setAuthor('[Мероприятие] Числа 💥', message.guild.iconURL({dynamic:true}))
          .setDescription('**Числа - это  мероприятие где вы можете заработать халявные монеты!**\n **Вам просто нужно написать в чат любое число от 1-30,дальше в конце мероприятия,ведущий мероприятия вводит команду и бот выбирает рандомное число.**\n **Eсли это будет число которое вы загадали - вы выиграли!** ')
          .addField("Ведущий мероприятия", `${message.author}`) 
          .addField('Приз:' , `**${Money} монет**`)
          .addField('Время окочания:' , `**${Time}**`)
          .setImage('https://i.gifer.com/72P.gif')
      )
  }}
