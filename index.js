const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("b!");

bot.on('ready', () =>  {
    console.log("Je suis connecté !")
  });

bot.login(process.env.TOKEN)

bot.on("guildMemberAdd", member => {
    const bvn = member.guild.channels.find(m => m.name === "accueil-messages");
    if(!bvn) return;
    bvn.send(`**Bienvenue sur le serveur test développement ${member}**`)
    console.log("Join")
})

bot.on("guildMemberRemove", member => {
    const bye = member.guild.channels.find(m => m.name === "accueil-messages");
    if(!bye) return;
    bye.send(`**${member} vient de nous quitter...**`)
    console.log("Quit")
})

bot.on('message', message => {
    if(message.content.startsWith(prefix + "cc")) {
        message.channel.send("**Salut !**")
        console.log("CC")
    }
    
    if(message.content.startsWith(prefix + "hey")) {
        message.reply("**Yo le S**")
        console.log("hey")
    }
})
