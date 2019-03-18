const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

bot.on("message", function (message)
{
    var input = message.content.toUpperCase();

    if(input === "HELP!")
    {
        let adminRoleObject = message.server.roles.get('name', 'admins');
        bot.sendMessage(message, `${adminRoleObject} are on the way!`);
    }
    if(input === "l")
    {
        bot.sendMessage(message, "@admin");
    }
    if(input === "WHO MADE SHADOWBOT?")

    {
        let ownerUserObject = message.server.members.get('name', 'Techmo3014');
        bot.sendMessage(message, `${ownerUserObject} made me.`);
    }

});

bot.loginWithToken("NTU2Nzc1NTk3NDY5MDczNDE5.D3FE2Q.6-JrnjNTsRNH1F_GSZL2UUEfEkQ");

client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot
