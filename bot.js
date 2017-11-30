//go to directory of bot, 
//use cmd and typ "npm install discord.io winston --save"
//node bot.js
var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
        var arg1 = args[0];
        var arg2 = args[1];
        var ninjaname = "";
        var char = "";
        var val = "";
        var length = arg2.length;

         switch(cmd) {
            case 'ninja':
              for(var k = 0; k < length; k++){
            switch(arg2[k]) {
                case 'a':
                    ninjaname += "ka";
                    break;
                case 'b':
                    ninjaname += "zu";
                    break;
                case 'c':
                    ninjaname += "mi";
                    break;
                case 'd':
                    ninjaname += "te";
                    break;
                case 'e':
                    ninjaname += "ku";
                    break;
                case 'f':
                    ninjaname += "lu";
                    break;
                case 'g':
                    ninjaname += "ji";
                    break;
                case 'h':
                    ninjaname += "ri";
                    break;
                case 'i':
                    ninjaname +=  "ki";
                    break;
                case 'j':
                    ninjaname += "zu";
                    break;
                case 'k':
                    ninjaname += "me";
                    break;
                case 'l':
                    ninjaname += "ta";
                    break;
                case 'm':
                    ninjaname += "rin";
                    break;
                case 'n':
                    ninjaname += "to";
                    break;
                case 'o':
                    ninjaname += "mo";
                    break;
                case 'p':
                    ninjaname += "no";
                    break;
                case 'q':
                    ninjaname += "ke";
                    break;
                case 'r':
                    ninjaname += "shi";
                    break;
                case 's':
                    ninjaname += "ari";
                    break;
                case 't':
                    ninjaname += "chi";
                    break;
                case 'u':
                    ninjaname += "do";
                    break;
                case 'v':
                    ninjaname += "ru";
                    break;
                case 'w':
                    ninjaname += "mei";
                    break;
                case 'x':
                    ninjaname += "na";
                    break;
                case 'y':
                    ninjaname += "fu";
                    break;
                case 'z':
                    ninjaname += "zi";
                    break;
                }
            }
        bot.sendMessage({
                    to: channelID,
                    message: "Your ninja name is : \"" + ninjaname + "\" -@kevinttan"
                });
         }
        
     }
});
            
