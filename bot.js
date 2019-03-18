const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', msg => {
  if (msg.content === '!Aiuto') {
    msg.reply('Ha bisogno di aiuto nel canale assistenza @admin' && msg.channel.id == '556786013264150530');
  }
});


// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot
