const config = require('./config.json')
const { readdirSync, constants } = require('fs');
const { Client, Collection, Discord, MessageEmbed } = require('discord.js');
const client = new Client({ disableEveryone: true })
client.commands = new Collection();
client.aliases = new Collection();


["handler"].forEach(handler => {
  require(`./bot-handler/${handler}`)(client)
})

client.on('ready', async () => {
  console.log('[Client] Авторизован как %s [%s]', client.user.tag, client.user.id)
  client.user.setPresence({ activity: { name: 'за сервером', type: 'WATCHING' } });
})


client.on('message', message => {
  // Если автор сообщения бот - выходим
  if (message.author.bot) return;

  // Если сообщение отправлено в ЛС, выходим
  if (!message.guild) return;

  // Является ли сообщение командой (начинается с префикса, указанного в конфиге)
  if (!message.content.startsWith(config.prefix)) return;

  // Разбиваем сообщение на аргументы и находим команду в первом аргументе
  const args = message.content.slice(config.prefix.length).split(/ +/);
  const commandName = args.shift().toLowerCase();
  const cmd =
    client.commands.get(commandName) || client.commands.get(client.aliases.get(commandName));

   
  // Запускаем команду, если она есть
  if (!cmd);
  else {
    message.channel.startTyping();
    setTimeout(() => {
      message.channel.stopTyping();
      cmd.run(client, message, args);
    }, 500);
  } 
});

client.on('ready', () => {
  members(); // Прогон при запуске
});

setInterval(() => {
  members()
}, 300000); // Прогон каждые 5 минут

function members() {
  let server = client.guilds.cache.get('742406971625570345');
  let channel = server.channels.cache.get('771109164851396649');

 let rm = `${server.roles.cache.find(role => role.name == 'Leader Russian Mafia').members.map(m => m.displayName)}`;
  let ykz = `${server.roles.cache.find(role => role.name == 'Leader Yakuza').members.map(m => m.displayName)}`;
  let wmc = `${server.roles.cache.find(role => role.name == 'Leader Warlock MC').members.map(m => m.displayName)}`;
  let lcn = `${server.roles.cache.find(role => role.name == 'Leader La Cosa Nostra').members.map(m => m.displayName)}`;
  let grove = `${server.roles.cache.find(role => role.name == 'Leader Grove Street').members.map(m => m.displayName)}`;
  let ballas = `${server.roles.cache.find(role => role.name == 'Leader Ballas').members.map(m => m.displayName)}`;
  let aztec = `${server.roles.cache.find(role => role.name == 'Leader Aztec').members.map(m => m.displayName)}`;
  let vagos = `${server.roles.cache.find(role => role.name == 'Leader Vagos').members.map(m => m.displayName)}`;
  let rifa = `${server.roles.cache.find(role => role.name == 'Leader Rifa').members.map(m => m.displayName)}`;
  let nwmc = `${server.roles.cache.find(role => role.name == 'Leader Night Wolf').members.map(m => m.displayName)}`;

  channel.messages.fetch('782263368446115860').then(async online_message => {
   if (!online_message) return console.error(`Ошибка вывода online_message()`);
   online_message.edit(null, {embed: {
        description: `\`\`\`md\n# Лидеры фракций\`\`\``,
        color: 0x8533ff,
        setFooter: ('Последнее обновление:'),
        setTimestamp:('') ,
        fields:[
            { name: `Фракция:`, value: `**Russian Mafia\nYakuza\nWarlock MC\nLa Cosa Nostra\nGrove Street\nBallas\nAztec\nVagos\nRifa\nNight Wolf**`, inline: true },
            { name: `Лидеры:`, value: `${rm ? rm : 'Нет лидера'}\n${ykz ? ykz : 'Нет лидера'}\n${wmc ? wmc : 'Нет лидера'}\n${lcn ? lcn : 'Нет лидера'}\n${grove ? grove : 'Нет лидера'}\n${ballas ? ballas : 'Нет лидера'}\n${aztec ? aztec : 'Нет лидера'}\n${vagos ? vagos : 'Нет лидера'}\n${rifa ? rifa : 'Нет лидера'}\n${nwmc ? nwmc : 'Нет лидера'}`, inline: true }
        ]
    }});
  }).catch(() => {
      console.error(`Не получилось найти сообщение в online_info. Ошибка.`);
  });
}
// Рестарт бота.

let setembed_general = ["не указано", "не указано", "не указано", "не указано", "не указано", "не указано", "не указано", "не указано"];
let setembed_fields = ["нет", "нет", "нет", "нет", "нет", "нет", "нет", "нет", "нет", "нет"];
let setembed_addline = ["нет", "нет", "нет", "нет", "нет", "нет", "нет", "нет", "нет", "нет"];

client.on('message', message => {
if (message.content.startsWith("/embsetup")) {
    if (message.channel.name != '📢┃инфомейкер') return
    const args = message.content.slice(`/embsetup`).split(/ +/);
    if (!args[1]) {
        message.reply(`\`укажите, что вы установите! Ниже предоставлен список настроек.\`\n\`[1] - Название\`\n\`[2] - Описание\`\n\`[3] - Цвет [#FFFFFF]\`\n\`[4] - Время\`\n\`[5] - Картинка\`\n\`[6] - Подпись\`\n\`[7] - Картинка к подписи\`\n\`[8] - Миниатюра\``);
        return message.delete();
    }
    if (typeof (+args[1]) != "number") {
        message.reply(`\`вы должны указать число! '/embsetup [число] [значение]'\``);
        return message.delete();
    }
    if (!args[2]) {
        message.reply(`\`значение отстутствует!\``);
        return message.delete();
    }
    let cmd_value = args.slice(2).join(" ");
    if (+args[1] == 1) {
        message.reply(`\`вы изменили заголовок с '${setembed_general[0]}' на '${cmd_value}'!\``)
        setembed_general[0] = cmd_value;
        return message.delete();
    } else if (+args[1] == 2) {
        message.reply(`\`вы изменили описание с '${setembed_general[1]}' на '${cmd_value}'!\``)
        setembed_general[1] = cmd_value;
        return message.delete();
    } else if (+args[1] == 3) {
        if (!cmd_value.startsWith("#")) {
            message.reply(`\`цвет должен начинаться с хештега. Пример: #FFFFFF - белый цвет!\``);
            return message.delete();
        }
        message.reply(`\`вы изменили цвет с '${setembed_general[2]}' на '${cmd_value}'!\``)
        setembed_general[2] = cmd_value;
        return message.delete();
    } else if (+args[1] == 4) {
        if (cmd_value != "включено" && cmd_value != "не указано") {
            message.reply(`\`время имеет параметры 'включено' или 'не указано'!\``);
            return message.delete();
        }
        message.reply(`\`вы изменили статус времени с '${setembed_general[3]}' на '${cmd_value}'!\``)
        setembed_general[3] = cmd_value;
        return message.delete();
    } else if (+args[1] == 5) {
        message.reply(`\`вы изменили URL картинки с '${setembed_general[4]}' на '${cmd_value}'!\``)
        setembed_general[4] = cmd_value;
        return message.delete();
    } else if (+args[1] == 6) {
        message.reply(`\`вы изменили подпись с '${setembed_general[5]}' на '${cmd_value}'!\``)
        setembed_general[5] = cmd_value;
        return message.delete();
    } else if (+args[1] == 7) {
        message.reply(`\`вы изменили URL аватарки подписи с '${setembed_general[6]}' на '${cmd_value}'!\``)
        setembed_general[6] = cmd_value;
        return message.delete();
    } else if (+args[1] == 8) {
        message.reply(`\`вы изменили URL миниатюры с '${setembed_general[7]}' на '${cmd_value}'!\``)
        setembed_general[7] = cmd_value;
        return message.delete();
    }
}

if (message.content == "/embsend") {
    if (!message.member.hasPermission("ADMINISTRATOR")) return
    const embed = new MessageEmbed();
    if (setembed_general[0] != "не указано") embed.setTitle(setembed_general[0]);
    if (setembed_general[1] != "не указано") embed.setDescription(setembed_general[1]);
    if (setembed_general[2] != "не указано") embed.setColor(setembed_general[2]);
    let i = 0;
    while (setembed_fields[i] != 'нет') {
        embed.addField(setembed_fields[i].split(`<=+=>`)[0], setembed_fields[i].split(`<=+=>`)[1]);
        if (setembed_addline[i] != 'нет') embed.addBlankField(false);
        i++;
    }
    if (setembed_general[4] != "не указано") embed.setImage(setembed_general[4]);
    if (setembed_general[5] != "не указано" && setembed_general[6] == "не указано") embed.setFooter(setembed_general[5]);
    if (setembed_general[6] != "не указано" && setembed_general[5] != "не указано") embed.setFooter(setembed_general[5], setembed_general[6]);
    if (setembed_general[3] != "не указано") embed.setTimestamp();
    if (setembed_general[7] != 'не указано') embed.setThumbnail(setembed_general[7]);
    message.channel.send(embed).catch(err => message.channel.send(`\`Хм.. Не получается. Возможно вы сделали что-то не так.\``));
    return message.delete();
}})

client.on("voiceStateUpdate",(oldState,newState) => {
  var categoryid = "770768015603138570";
  var channelid = "770768016135815168";
  let emojis = ["👑", "🤡", "🌚", "😈", "🤖", "🎅", "👻", "✨", "⚡️", "🐹"]
  var random_emoji = Math.floor(Math.random() * emojis.length);
  if(newState.channel?.id == channelid) {
    newState.guild.channels.create(`${emojis[random_emoji]}・Приват ${newState.member.user.username}` , {
      type:"voice",
      parent:categoryid,
      permissionOverwrites:[{
          id:newState.member.id,
          allow: ["MANAGE_CHANNELS"]
      },{
          id:newState.guild.id,
          deny:["MANAGE_CHANNELS"]
      }] 
  }).then(channel=>{
    channel.setUserLimit('2')
      newState.setChannel(channel)
  })
  
}
if(oldState.channel?.id != channelid && oldState.channel?.parent?.id == categoryid && !oldState.channel?.members.size) oldState.channel.delete();
})
client.on("ready", async() => {
  const channel = client.channels.cache.get(`783103534148091904`);
  if (channel) {
    const fetchedChannels = [channel];
    fetchedChannels.forEach(c => {
      c.messages.fetch(`783104841287335957`).then(msg => msg.react("🎅"));
    })
  }
})

client.on("messageReactionAdd", async (messageReaction, user) => {
  let message = messageReaction.message;
  let guildoff = client.guilds.cache.get(`742406971625570345`);
  if(message.guild.id != guildoff.id) return;
  if(message.channel.id != "783103534148091904") return;
  if(messageReaction.emoji.name === "🎅"){
    let member = message.guild.members.cache.get(user.id)
    let role = message.guild.roles.cache.get(`783088329486237716`)
    member.roles.add(role)
  }
})

client.on("messageReactionRemove", async (messageReaction, user) => {
  let message = messageReaction.message;
  let guildoff = client.guilds.cache.get(`742406971625570345`);
  if(message.guild.id != guildoff.id) return;
  if(message.channel.id != "783103534148091904") return;
  if(messageReaction.emoji.name === "🎅"){
    let member = message.guild.members.cache.get(user.id)
    let role = message.guild.roles.cache.get(`783088329486237716`)
    member.roles.remove(role)
  }
})

client.on('message',message => {
  if (message.content.startsWith(`/cont-vip`)) {
    let titan = message.guild.roles.cache.find((r) => r.name ==   'Подписка на контент "Illegal"');
    let vip = message.guild.members.cache.find((m) => m.id == `${message.author.id}`);
    vip.roles.add(titan);
    message.reply(
       '**Вы успешно преобрели подписку на контент \`Illegal\` ** ').then(d_msg => { 
        d_msg.delete({timeout: 10000})});
        message.delete();
  }})

  client.on('message' , message => {
  if (message.content.startsWith(`/out`)) {
    let autist = message.guild.members.cache.find((m) => m.id == `${message.author.id}`);
     const rolesToRemove = [
      "Warlock MC",
      "Yakuza",
      "La Cosa Nostra",
      "Russian Mafia",
      "Grove Street",
    ];
    let maf = (`742406971675902035`)
    let logChannel = message.guild.channels.cache.find((c) => c.name == "🎯》logs-role");
    let roleToRemove = autist.roles.cache.find(r => rolesToRemove.includes(r.name));
    const errorEmbed = require('./Utils/error')
    if(!roleToRemove) {
      return message.channel.send(errorEmbed(message.client, 'У вас нет роли для снятия.')).then(d_msg => { 
        d_msg.delete({timeout: 10000})});
    }
message.delete();
    autist.roles.remove(roleToRemove);
    autist.roles.remove(maf);
    message.reply(`**Вы лишились роли \`${roleToRemove.name}\` по собственному желанию.**`).then(d_msg => { 
      d_msg.delete({timeout: 10000})});
    return logChannel.send(
      new MessageEmbed()
        .setTitle(`Снятие роли псж!`)
        .setDescription(`
          \`\`Пользователь:\`\` **${autist.displayName}**
          \`\`Снята роль: \`\` **${roleToRemove.name}**`)
        .setFooter(`© Команда модерации | Illegals`))
    }})

client.login(config.token);
