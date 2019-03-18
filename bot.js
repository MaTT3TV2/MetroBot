const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

cclient.on('m', msg => {
  if (msg.content === 'ping' && msg.channel.id == '556786013264150530') {
    msg.reply('@"admin"');
  }
});


});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot
