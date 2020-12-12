  
module.exports = {
    name: 'run',
    aliases: ['run'],
    description: 'Запуск кода',
    run: (client, message, args) => {
    let cmdrun = args.slice(0).join(" ");
    var myid = "669212280382029854"; 
    var dolbaeb = "390581871290875904";
    if (message.author.id != myid && message.author.id != dolbaeb)
    return;
      
    try {
        eval(cmdrun);
    } catch (err) {
        message.reply(`**\`произошла ошибка: ${err.name} - ${err.message}\`**`);
    }
  } 
}