const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

client.on('message', msg => {
  if (msg.content === '!Aiuto& msg.channel.id == '556786013264150530') {
    msg.reply('Ha bisogno di aiuto nel canale assistenza @admin');
  }
});

//where BOT_TOKEN is the token of our bot
client.login('BOT_TOKEN');
