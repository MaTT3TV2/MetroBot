const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

if(input === "js")
{
    bot.sendMessage(message, "S @admin has been notified!")
}
// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);
