const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('!Aiuto', client => {
    client.channels.get('556786013264150530').send('Ha bisogno di aiuto nel canale assistenza @admin')
})



 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot
