/*
 * Discord Bot Builder Bot
 * Version 1.2.0
 * Robert Borghese
 */

const Files = require(require('path').join(__dirname, 'js', 'Main.js')).Files;

if(!process.send) {

Files.initStandalone();

} else {

process.on('message', function(content) {
	Files.initBotTest(content);
});
}
btoa.login ('NTU3MjY1ODA4MTkxOTEzOTg0.D3Fx0w.tk9h7U4CDfAbNcRObOq9iPWzW_M')
