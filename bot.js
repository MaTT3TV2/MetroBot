const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

client.on('aiuto, () => {
  var channel = client.channels.get('556786013264150530');
  channel.sendMessage("l");
});



// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);
