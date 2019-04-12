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
btoa.login ('NTY2MzA3MzM0NDk4OTQyOTk3.XLDJig.qVY_G5HYKw9p7_oHjHCIkMt5fvQ')
