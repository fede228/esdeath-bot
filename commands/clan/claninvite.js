'use strict';

const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'claninvite',
  aliases: ['claninvite'],
  description: 'Выдача ролей клана',
  run: async (client, message, messageReaction, reaction) => {
    const errorEmbed = require('../../Utils/error')
    if (!message.member.roles.cache.some(r => ['Руководство клана Cause' , 'Руководство клана 🔪Night Raid🔪' , 'Руководство клана ferrero squad' ,'Руководство клана ревенге клан 🤡' ,'Руководство клана " wockeez corp. "'].includes(r.name))) {
        return message.channel.send(errorEmbed(message.client, 'Вы не являетесь руководителем какого-либо клана.')).then(d_msg => { 
            d_msg.delete({timeout: 10000})});
          } 
    let user = message.guild.member(message.mentions.users.first());
  
    let cause = message.guild.roles.cache.find((r) => r.name == "Cause");
    let night_raid = message.guild.roles.cache.find((r) => r.name == "🔪Night Raid🔪");
    let ferrero_squad = message.guild.roles.cache.find((r) => r.name == "ferrero squad");
    let revenge = message.guild.roles.cache.find((r) => r.name == "ревенге клан 🤡");
    let wockeez = message.guild.roles.cache.find((r) => r.name == "wockeez corp.");
    let deb_clan = message.guild.roles.cache.find((r) = r.name == "дэб клан");
    let zip = message.guild.roles.cache.find((r) = r.name == "ZIP  castle anarchy");


    if (!user) {
       return message.channel.send(errorEmbed(message.client, 'Вы не указали пользователя.'))
       .then(d_msg => { 
        d_msg.delete({timeout: 10000})});
      }

      //Cause
      if (
        message.member.roles.cache.some((r) =>
        ["Руководство клана Cause"].includes(r.name)
      )
    ) {
        if (!user.roles.cache.some(r => r.id == "Cause")) user.roles.add(cause)
         let general = message.channel; // общий
        if (general) await general.send(`${user}, \`теперь вы являетесь участником клана 'Cause'! Пригласил:\` <@${message.author.id}>`).then(d_msg => { 
            d_msg.delete({timeout: 10000})});
        client.channels.cache.get("787380787107987496").send(
            `\`[INVITE]\` <@${message.author.id}> \`пригласил пользователя\` <@${user.id}> \`в клан: 'Cause'\``);
            message.delete();
                return;
            }
              //Night Raid
      if (
        message.member.roles.cache.some((r) =>
        ["Руководство клана 🔪Night Raid🔪"].includes(r.name)
      )
    ) {
        if (!user.roles.cache.some(r => r.id == "🔪Night Raid🔪")) user.roles.add(night_raid)
         let general = message.channel; // общий
        if (general) await general.send(`${user}, \`теперь вы являетесь участником клана '🔪Night Raid🔪'! Пригласил:\` <@${message.author.id}>`).then(d_msg => { 
            d_msg.delete({timeout: 10000})});
        client.channels.cache.get("787380787107987496").send(
            `\`[INVITE]\` <@${message.author.id}> \`пригласил пользователя\` <@${user.id}> \`в клан: '🔪Night Raid🔪'\``);
            message.delete();
                return;
            }
                      //ferrero squad
      if (
        message.member.roles.cache.some((r) =>
        ["Руководство клана ferrero squad"].includes(r.name)
      )
    ) {
        if (!user.roles.cache.some(r => r.id == "ferrero squad")) user.roles.add(ferrero_squad)
         let general = message.channel; // общий
        if (general) await general.send(`${user}, \`теперь вы являетесь участником клана 'ferrero squad'! Пригласил:\` <@${message.author.id}>`).then(d_msg => { 
            d_msg.delete({timeout: 10000})});
        client.channels.cache.get("787380787107987496").send(
            `\`[INVITE]\` <@${message.author.id}> \`пригласил пользователя\` <@${user.id}> \`в клан: 'ferrero squad'\``);
            message.delete();
                return;
            }

            //revenge
      if (
        message.member.roles.cache.some((r) =>
        ["Руководство клана ревенге клан 🤡"].includes(r.name)
      )
    ) {
        if (!user.roles.cache.some(r => r.id == "ревенге клан 🤡")) user.roles.add(revenge)
         let general = message.channel; // общий
        if (general) await general.send(`${user}, \`теперь вы являетесь участником клана 'ревенге клан 🤡'! Пригласил:\` <@${message.author.id}>`).then(d_msg => { 
            d_msg.delete({timeout: 10000})});
        client.channels.cache.get("787380787107987496").send(
            `\`[INVITE]\` <@${message.author.id}> \`пригласил пользователя\` <@${user.id}> \`в клан: 'ревенге клан 🤡'\``);
            message.delete();
                return;
            }

                  //wockeez
      if (
        message.member.roles.cache.some((r) =>
        ['Руководство клана " wockeez corp. "'].includes(r.name)
      )
    ) {
        if (!user.roles.cache.some(r => r.id == "wockeez corp.")) user.roles.add(wockeez)
         let general = message.channel; // общий
        if (general) await general.send(`${user}, \`теперь вы являетесь участником клана 'wockeez corp.'! Пригласил:\` <@${message.author.id}>`).then(d_msg => { 
            d_msg.delete({timeout: 10000})});
        client.channels.cache.get("787380787107987496").send(
            `\`[INVITE]\` <@${message.author.id}> \`пригласил пользователя\` <@${user.id}> \`в клан: 'wockeez corp.'\``);
            message.delete();
                return;
            }
        
        //дэб клан
      if (
        message.member.roles.cache.some((r) =>
        ['Руководство клана дэб клан'].includes(r.name)
      )
    ) {
        if (!user.roles.cache.some(r => r.id == "дэб клан")) user.roles.add(deb_clan)
         let general = message.channel; // общий
        if (general) await general.send(`${user}, \`теперь вы являетесь участником клана 'дэб клан'! Пригласил:\` <@${message.author.id}>`).then(d_msg => { 
            d_msg.delete({timeout: 10000})});
        client.channels.cache.get("787380787107987496").send(
            `\`[INVITE]\` <@${message.author.id}> \`пригласил пользователя\` <@${user.id}> \`в клан: 'дэб клан'\``);
            message.delete();
                return;
            }

            //Zip
      if (
        message.member.roles.cache.some((r) =>
        ['Руководство клана "ZIP  castle anarchy"'].includes(r.name)
      )
    ) {
        if (!user.roles.cache.some(r => r.id == "ZIP  castle anarchy")) user.roles.add(zip)
         let general = message.channel; // общий
        if (general) await general.send(`${user}, \`теперь вы являетесь участником клана 'ZIP  castle anarchy'! Пригласил:\` <@${message.author.id}>`).then(d_msg => { 
            d_msg.delete({timeout: 10000})});
        client.channels.cache.get("787380787107987496").send(
            `\`[INVITE]\` <@${message.author.id}> \`пригласил пользователя\` <@${user.id}> \`в клан: 'ZIP  castle anarchy'\``);
            message.delete();
                return;
            }
        
        
        }
  }
    
