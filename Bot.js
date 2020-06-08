var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
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
rando_imgs = [
    'https://tenor.com/view/edp445-eat-dat-pussy445-edp-youtube-youtuber-gif-17001719',
    'https://media.giphy.com/media/njBmZZaxennQ4/giphy.gif',
    'https://media.giphy.com/media/JSHo28IaMcD04/giphy.gif',
    'https://tenor.com/view/edp-thrust-black-guy-look-gif-16892200',
    'https://media.giphy.com/media/wAxlCmeX1ri1y/giphy.gif',
    'https://media.giphy.com/media/113vTRXlcPoi8o/giphy.gif',
    'https://media.giphy.com/media/gnWSeryP08GZO/giphy.gif',
    'https://media.giphy.com/media/bFXDSE7gx1y2Q/giphy.gif',
    'https://media.giphy.com/media/cMPdlbcUKl3xkMCyD3/giphy.gif',
    'https://media.giphy.com/media/3IFEZMEY17RZolLKuW/giphy.gif',
    'https://media.giphy.com/media/TI8yz4eu34zDO/giphy.gif',
    'https://media.giphy.com/media/xTiTnvXly4hGvWqt6E/giphy.gif',
    'https://media.giphy.com/media/aJYl3icPWhmsE/giphy.gif',
    'https://media.giphy.com/media/lqIaUfPi8rTqM/giphy.gif',
    'https://media.giphy.com/media/MJs7EYwHyG8XC/giphy.gif',
    'https://media.giphy.com/media/1e4CgsRnTQJFK/giphy.gif',
    'https://media.giphy.com/media/LSiYbnbEpeTCfd3cl3/giphy.gif'
]
function validURL(str) {
  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return !!pattern.test(str);
}
bot.on('message', function (user, userID, channelID, message, evt) {
    if (message.substring(0, 1) == '>') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            case 'morre':
                bot.sendMessage({
                    to: channelID,
                    message: 'morre tu seu filho da puta'
                })
                break;
            case 'calatesalgueiro':
                bot.sendMessage({
                to: channelID,
                message: 'Foda-se salgueiro ja ninguem te consegue ouvir'
                })
                break;
            case 'teta':
                bot.sendMessage({
                to: channelID,
                message: 'A teta do charneca é incrível'
                })
                break;
            case 'calate':
                bot.sendMessage({
                to: channelID,
                message: 'cala-te ' + args[0] + ' seu lixo'
                })
                break;
            case 'xeue':
                bot.sendMessage({
                to: channelID,
                message: user.toUpperCase() + ' INVOCOU PRETO DANCARINO\n' + rando_imgs[Math.floor(Math.random() * rando_imgs.length)]
                })
                break;
            case 'novopreto':
                if(typeof(args[0])!='string'){
                    bot.sendMessage({
                        to: channelID,
                        message: 'O GIF precisa de ser uma string'
                    })
                    break;
                }
                if (!validURL(args[0])){
                    bot.sendMessage({
                        to: channelID,
                        message: "Para de por lixo no meu bot seu lixo"
                    })
                    break;
                }
                if(args[0].toLowerCase().includes("gay") || args[0].toLowerCase().includes("gays") || args[0].toLowerCase().includes("kiss") || args[0].toLowerCase().includes("sexy")){
                    bot.sendMessage({
                        to: channelID,
                        message: 'Para de por merdas gays no meu bot'
                    })
                    break;
                }
                bot.sendMessage({
                to: channelID,
                message: 'PRETO ADICIONADO'
                })
                rando_imgs.push(args[0]);
                break;
            case 'help':
                bot.sendMessage({
                to: channelID,
                message: "morre\ncalatesalgueiro\nteta\ncalate @...\nxeue\n"
                })
                break;
         }
     }
});