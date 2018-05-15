const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("t!");
var number = 0;
var game = false;

bot.on('ready', () =>  {
    console.log("Je suis connecté !")
     bot.user.setActivity("t!help | © 🔱Road Rage France🔱#2987", {type: "WATCHING"})
  });

bot.login(process.env.TOKEN)

bot.on("guildMemberAdd", member => {
    const bvn = member.guild.channels.find(m => m.name === "accueil-messages");
if(!bvn) return;
bvn.send(`Bienvenue sur le serveur ${member} !`)
console.log("join")
})

bot.on("guildMemberRemove", member => {
    const bye = member.guild.channels.find(m => m.name === "accueil-messages");
if(!bye) return;
bye.send(`${member} vient de nous quitter...`)
console.log("quit")
})

bot.on('message', message => {

    if(message.content.startsWith(prefix + "help")) {
        let embed = new Discord.RichEmbed()
        .setColor('#FE9901')
        .setAuthor("Liste des commandes", bot.user.avatarURL)
        .addField("Road Rage Bot JR",  "__**Voici les commandes disponibles**__ :\n\n __**Légende**__ :\n\n ✅ : __Commande Disponible__\n ❌ : __Commande temporairement désactivée__\n 🚧 : __Commande en cours de développement__\n\n __t!help__ Pour la liste des commandes ✅\n\n __t!chaine__ pour avoir le lien de ma chaîne YouTube ✅\n\n__t!addrole__ ou __t!ar__ Pour ajouter une personne à un rôle ✅\n\n__t!ban__ Pour bannir un utilisateur ✅\n\n__t!kick__ Pour kicker un utilisateur ✅\n\n__t!createrole__ ou __t!cr__ Pour créer un rôle ✅\n\n__t!createchannel__ ou __t!cc__ Pour créer un channel ✅\n\n__t!removerole__ ou __t!rr__ Pour enlever un rôle à quelqu'un ✅\n\n__t!reseaux__ Pour avoir tous mes réseaux sociaux ✅\n\n__t!justeprix__ ou __t!jp__ Pour commencer une partie du Juste Prix ✅\n\n__t!stoppartie__ ou __t!sp__ Pour arrêter une partie en cours du Juste Prix ✅\n\n__t!OM__ ou __t!om__ Pour envoyer un texte de supporter de l'OM + un Gif sympa ✅\n\n__t!PSG__ ou __t!psg__ Pour envoyer un texte troll à propos du PSG + une photo sympa (Allez l'OM) ✅", true)
        .setFooter("© 🔱Road Rage France🔱#2987")
        .setTimestamp()
        message.channel.send(embed)
        console.log("help")
        }

if(message.content.startsWith(prefix + "chaine")) {
    let embed = new Discord.RichEmbed()
    .setColor('#FE9901')
    .setAuthor("Ma chaine", bot.user.avatarURL)
    .addField("Pour voir ma chaine",  "[Cliquez ici](https://www.youtube.com/c/RoadRageFrance13)", true)
    .setFooter("© 🔱Road Rage France🔱#2987")
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

if (message.content.startsWith(prefix + "kick")) {
if(!message.member.hasPermission('KICK_MEMBERS')) {
    return message.reply("Tu n'as pas les permissions !").catch(console.error);
}
if(message.mentions.users.size === 0) {
    return message.reply("Merci de mentionner un utilisateur.").catch(console.error);
}
let kickMember = message.guild.member(message.mentions.users.first());
if(!kickMember) {
    return message.reply("Cet utilisateur est introuvable ou impossible a kick")
}
if(!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")) {
    return message.reply("Je n'ai pas la permission KICK_MEMBERS pour faire ceci").catch(console.error);
}
kickMember.kick().then(member => {
message.channel.send(` :wave: ${member.user.username} a été kick :point_right:`).catch(console.error);
      
}).catch(console.error);
console.log("kick")
}
      
if (message.content.startsWith(prefix + "ban")) {
if(!message.member.hasPermission('BAN_MEMBERS')) {
    return message.reply("Tu n'as pas les permissions !").catch(console.error);
}
if(message.mentions.users.size === 0) {
    return message.reply("Merci de mentionner un utilisateur.").catch(console.error);
}
let banMember = message.guild.member(message.mentions.users.first());
if(!banMember) {
    return message.reply("Cet utilisateur est introuvable ou impossible a ban")
}
if(!message.guild.member(bot.user).hasPermission("BAN_MEMBERS")) {
    return message.reply("Je n'ai pas la permission BAN_MEMBERS pour faire ceci").catch(console.error);
}
banMember.ban().then(member => {
    message.channel.send(` :wave: ${member.user.username} a été ban :point_right:`).catch(console.error);
      
}).catch(console.error);
console.log("ban")
}

if(message.content.startsWith(prefix + "createchannel") || message.content.startsWith(prefix + "cc")){
    message.delete(message.author)
        let argson = message.content.split(" ").slice(1);
        let namechannel = argson.join(" ")
if(!message.member.hasPermission("MANAGE_CHANNELS")) {
    return message.reply("Tu n'as pas les permisions !").catch(console.error);
}
if(!message.guild.member(bot.user).hasPermission("MANAGE_CHANNELS")) {
    return message.reply("Je n'ai pas les permissions !")
}
message.guild.createChannel(namechannel)
return message.reply(`Le channel ${namechannel} à bien été créé`)
console.log("create channel")
}

if(message.content.startsWith(prefix + "createrole") || message.content.startsWith(prefix + "cr")) {
    message.delete(message.author)
        let argson = message.content.split(" ").slice(1);
        let namerole = argson.join(" ")
if(!message.member.hasPermission("MANAGE_ROLES")) {
    return message.reply("Tu n'as pas les permisions !").catch(console.error);
}
if(!message.guild.member(bot.user).hasPermission("MANAGE_ROLES")) {
    return message.reply("Je n'ai pas les permissions !")
}
message.guild.createRole({name: namerole,})
    return message.reply(`Le role ${namerole} a bien été créé`)
    console.log("create role")
}

if(message.content.startsWith(prefix + "reseaux")) {
    let embed = new Discord.RichEmbed()
    .setColor('#FE9901')
    .setAuthor("Road Rage France", bot.user.avatarURL)
    .addField("Mes réseaux sociaux",  "\n[Twitter, cliquez ici](https://twitter.com/RoadRageFrance)\n\n[Facebook, cliquez ici](https://www.facebook.com/RoadRageFrance)\n\n[Instagram, cliquez ici](https://www.instagram.com/road_rage_france/)\n", true)
    .setFooter("© 🔱Road Rage France🔱#2987")
    .setTimestamp()
    message.channel.send(embed)
    console.log("réseaux")
}

if(message.content.startsWith(prefix + "removerole") || message.content.startsWith(prefix + "rr")) {
    message.delete(message.author)
    let memberremoverole = message.mentions.members.first()
    if(!memberremoverole) return message.reply("Veuillez mentionner un utilisateur");
    let namerole = message.mentions.roles.first();
    if(!namerole) return message.reply("Veuillez mentionner un role")
        if(!message.member.hasPermission("MANAGE_ROLES")) {
            return message.reply("Tu n'as pas les permisions !").catch(console.error);
        }
if(!message.guild.member(bot.user).hasPermission("MANAGE_ROLES")) {
    return message.reply("Je n'ai pas les permissions !");
}
    memberremoverole.removeRole(namerole)
        return message.reply(`Le role ${namerole} a bien été enlevé a ${memberremoverole}`);
}

if(message.content.startsWith(prefix + "addrole") || message.content.startsWith(prefix + "ar")) {
    message.delete(message.author)
        let membergiverole = message.mentions.members.first()
if(!membergiverole) return message.reply("Veuillez mentionner un utilisateur");
    let namerole = message.mentions.roles.first();
if(!namerole) return message.reply("Veuillez mentionner un role")
if(!message.member.hasPermission("MANAGE_ROLES")) {
    return message.reply("Tu n'as pas les permisions !").catch(console.error);
}
if(!message.guild.member(bot.user).hasPermission("MANAGE_ROLES")) {
    return message.reply("Je n'ai pas les permissions !");
}
    membergiverole.addRole(namerole)
        return message.reply(`Le role ${namerole} a bien été add a ${membergiverole}`);
}

if(message.content.startsWith(prefix + "justeprix") || message.content.startsWith(prefix + "jp")) {
    message.delete(message.author)
    message.channel.send("**Partie lancée ! Ecrivez un nombre compris entre 1 et 5000 !**")
    game = true;
    number = Math.floor(Math.random() * (5000 - 0) + 0)
    console.log(number)
}

if(message.content.startsWith(prefix + "stoppartie") || message.content.startsWith(prefix + "sp")) {
    message.delete(message.author)
    if(game == true){
        message.channel.send("**Partie stoppée !**")
    }else{
        message.channel.send("**Il n'y a aucune partie en cours !**")
    }

}

if(game && message.content != null){
    if(Number.isInteger(parseInt(message.content))) {
        if(message.content > number){
            message.channel.send("**C'est moins !**")
        }
        else if(message.content < number){
            message.channel.send("**C'est plus !**")
        }
        else{
            message.channel.send("**C'est gagné !**", {
                file: "https://cdn.journaldugeek.com/files/2014/04/Risoli-Million.gif"
            });
            game = false;
        }
    }
}

if(message.content.startsWith(prefix + "OM") || message.content.startsWith(prefix + "om")) {
    message.delete(message.author)
    let embed = new Discord.RichEmbed()
    .setColor('#FE9901')
    .setAuthor("Road Rage France", bot.user.avatarURL)
    .setDescription("**On est en finale ! On est, on est, on est en finale !!!**")
    .setImage("https://media.giphy.com/media/3ov9k0kGnPS4B57RQs/giphy.gif")
    message.channel.send(embed)
    console.log("OM")
    }

if(message.content.startsWith(prefix + "PSG") || message.content.startsWith(prefix + "psg")) {
    message.delete(message.author)
    let embed = new Discord.RichEmbed()
    .setColor('#FE9901')
    .setAuthor("Road Rage France", bot.user.avatarURL)
    .setDescription("**6-1 C'est la champion's League PAW PAW PAW !!**")
    .setImage("https://i.ytimg.com/vi/cXqMNWbad8c/hqdefault.jpg")
    message.channel.send(embed)
    console.log("psg")
    }
})
