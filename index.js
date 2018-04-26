const Discord = require('discord.js');
const bot = new Discord.Client()

var prefix = ("t!");

bot.on('ready', () =>  {
    console.log("Je suis connecté !")
     bot.user.setActivity("t!help | © 🔱Road Rage France🔱#2987")
  });

bot.login('NDM2OTM2Mzk3Nzc4MTkwMzY3.DcJJKg.XSJXWupexO9q31n5PYHCPP_sojk')

bot.on("guildMemberAdd", member => {
    const bvn = member.guild.channels.find(m => m.name === "accueil-messages");
if(!bvn) return;
bvn.send(`Bienvenue sur le serveur ${member.user.username} !`)
console.log("join")
})

bot.on("guildMemberRemove", member => {
    const bye = member.guild.channels.find(m => m.name === "accueil-messages");
if(!bye) return;
bye.send(`${member.user.username} vient de nous quitter...`)
console.log("quit")
})

bot.on('message', message => {

if (message.content.startsWith( prefix + "help")) {
    message.channel.send("__**Voici les commandes disponibles**__ :\n\n __**Légende**__ :\n\n ✅ : __Commande Disponible__\n ❌ : __Commande temporairement désactivée__\n 🚧 : __Commande en cours de développement__\n\n __t!help__ Pour la liste des commandes ✅\n __t!chaine__ pour avoir le lien de ma chaîne YouTube ✅");
    console.log("help");
}

if(message.content.startsWith(prefix + "chaine")) {
    let embed = new Discord.RichEmbed()
    .setColor('#FE9901')
    .setAuthor("Ma chaine", bot.user.avatarURL)
    .addField("Pour voir ma chaine",  "[Cliquez ici](https://www.youtube.com/c/RoadRageFrance13)", true)
    .setFooter("Abonne toi")
    .setTimestamp()
    message.channel.send(embed)
    console.log("chaine")
    }

    if (message.content.startsWith(prefix + "ping")) {
        var now = require('performance-now');
        var startTime = now();
        message.channel.send("**pong = calcul...**")
            .then(message => {
            var endTime = now();
        message.edit("**pong 🏓 = " + Math.round(endTime - startTime) + " ms.**");
        console.log("ping")
    }).
        catch(console.error);
    }
})