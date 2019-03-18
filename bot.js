const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

// client is an instance of Discord.Client
client.on("message", (message) => {
if(message.content == "jasj"){ // Check if content of message is "!ping"
		message.channel.send("ll"); // Call .send() on the channel object the message was sent in
	}
});

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);
