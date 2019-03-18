const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

bot.on('!Aiuto', (message) => {
    if(message.content == '!owner') {
        message.channel.send('Hi @"admin" is the owner, do you need help');
    }
});

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);
