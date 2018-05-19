const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("t!");
var number = 0;
var game = false;

bot.on('ready', () =>  {
    console.log("Je suis connecté !")
     bot.user.setActivity("t!help | © 🔱Road Rage France🔱#2987", {type: "WATCHING"})
  });

bot.login('NDM5MTgyNTQ2MjM2OTk3NjMy.DcPcJQ.GVSDNwHJyexr7fH5BSSL7ZH0_lI')

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
        message.delete(message.author)
        let embed = new Discord.RichEmbed()
        .setColor('#FE9901')
        .setAuthor("Liste des commandes", bot.user.avatarURL)
        .setTitle("Road Rage Bot JR")
        .setDescription("__**Voici les commandes disponibles**__ :\n\n" +
        "__**Légende**__ :\n\n" + 
        ":white_check_mark: : __Commande Disponible__\n" +
        ":x: : __Commande temporairement désactivée__\n" +
        ":construction: : __Commande en cours de développement__\n" +
        "**t!help** Pour la liste des commandes :white_check_mark:\n" +
        "**t!chaine** pour avoir le lien de ma chaîne YouTube :white_check_mark:\n" +
        "**t!addrole** ou **t!ar** Pour ajouter une personne à un rôle :white_check_mark:\n" +
        "**t!ban** Pour bannir un utilisateur :white_check_mark:\n" +
        "**t!kick** Pour kicker un utilisateur :white_check_mark:\n" +
        "**t!createrole** ou **t!cr** Pour créer un rôle :white_check_mark:\n" +
        "**t!createchannel** ou **t!cc** Pour créer un channel :white_check_mark:\n" +
        "**t!removerole** ou **t!rr** Pour enlever un rôle à quelqu'un :white_check_mark:\n" +
        "**t!reseaux** Pour avoir tous mes réseaux sociaux :white_check_mark:\n" +
        "**t!justeprix** ou **t!jp** Pour commencer une partie du Juste Prix :white_check_mark:\n" +
        "**t!stoppartie** ou **t!sp** Pour arrêter une partie en cours du Juste Prix :white_check_mark:\n" +
        "**t!OM** Pour envoyer un texte de supporter de l'OM + un Gif sympa :white_check_mark:\n" +
        "**t!PSG** Pour envoyer un texte troll à propos du PSG + une photo sympa (Allez l'OM) :white_check_mark:\n" +
        "**t!serveurinfos** ou **t!si** Pour avoir toutes les infos sur le serveur :white_check_mark:\n" +
        "**t!botinfos** ou **t!bi** Pour avoir toutes les infos sur le bot :white_check_mark:\n" +
        "**t!userinfos** ou **t!ui** Pour avoir toutes les infos sur un utilisateur :construction:\n"
        )
        .setFooter(`Commande exécutée par ${message.author.tag}`)
        .setTimestamp()
        message.channel.send(embed)
        console.log("help")
        }

if(message.content.startsWith(prefix + "chaine")) {
    let embed = new Discord.RichEmbed()
    .setColor('#FE9901')
    .setAuthor("Ma chaine", bot.user.avatarURL)
    .addField("Pour voir ma chaine",  "[Cliquez ici](https://www.youtube.com/c/RoadRageFrance13)", true)
    .setFooter(`Commande exécutée par ${message.author.tag}`)
    .setTimestamp()
    message.channel.send(embed)
    console.log("chaine")
    }

if (message.content.startsWith(prefix + "ping")) {
    message.delete(message.author)
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
    message.delete(message.author)
    return message.reply("Tu n'as pas les permissions !").catch(console.error);
}
if(message.mentions.users.size === 0) {
    message.delete(message.author)
    return message.reply("Merci de mentionner un utilisateur.").catch(console.error);
}
let banMember = message.guild.member(message.mentions.users.first());
if(!banMember) {
    return message.reply("Cet utilisateur est introuvable ou impossible a ban")
}
if(!message.guild.member(bot.user).hasPermission("BAN_MEMBERS")) {
    message.delete(message.author)
    return message.reply("Je n'ai pas la permission BAN_MEMBERS pour faire ceci").catch(console.error);
}
banMember.ban().then(member => {
    message.delete(message.author)
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
    .setFooter(`Commande exécutée par ${message.author.tag}`)
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
    .setDescription("**Allez l'OM, à jamais les premiers !**")
    .setImage("http://www.footpack.fr/wp-content/uploads/2018/03/victoire-olympique-marseille-1993.jpg")
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

if(message.content.startsWith(prefix + "botinfos") || message.content.startsWith(prefix + "bi")) {
    message.delete(message.autor)
    let embed = new Discord.RichEmbed()
    .setAuthor(bot.user.username, bot.user.avatarURL)
    .setColor('#FE9901')
    .setTitle("__Informations du Bot__")
    .addField(":crown: Créateur :", "__Road Rage France__")
    .addField(":speech_balloon:Channels", bot.channels.size, true)
    .addField(":abcd:Username", bot.user.username)
    .addField(":1234:Discriminator", bot.user.discriminator, true)
    .addField(":clock5: Uptime", Math.round(bot.uptime / 1000 * 60 * 60) + " heures, " + Math.round(bot.uptime / 1000 * 60) % 60 + " minutes et " + Math.round(bot.uptime / 1000 * 60) % 60 + " secondes", true)
    .setTimestamp()
    .setFooter(`Commande exécutée par ${message.author.tag}`)
    message.channel.send(embed)
}

if(message.content.startsWith(prefix + "serveurinfos") || message.content.startsWith(prefix + "si")) {
    message.delete(message.author)
    let embed = new Discord.RichEmbed()
    .setAuthor(bot.user.username, bot.user.avatarURL)
    .setDescription("Informations du Serveur")
    .addField("Propriétaire du serveur", message.guild.owner.user.tag)
    .addField("Nom du serveur", message.guild.name)
    .addField("Serveur crée le", message.guild.createdAt)
    .addField("Nombre d'utilisateurs sur le serveur", message.guild.memberCount)
    .addField("Nombre d'utilisateurs (hors bots)", message.guild.members.filter(member => !member.user.bot).size)
    .addField("Nombre de bots", message.guild.members.filter(member => member.user.bot).size)
    .addField("Nombre de salons", message.guild.channels.size)
    .addField("Nombre de rôles", message.guild.roles.size)
    .addField("Liste des rôles", message.guild.roles.map(r => r.name).length > 900 ? "Trop de rôles !" : message.guild.roles.map(r => r.name))
    .setColor("#FE9901")
    .setFooter(`Commande exécutée par ${message.author.tag}`)
    message.channel.send(embed)
}

if(message.content.startsWith(prefix + "userinfos") || message.content.startsWith(prefix + "ui")) {
    message.delete(message.author)
    let embed = new Discord.RichEmbed()
    .setColor('#FE9901')
    .setAuthor("Road Rage Bot", bot.user.avatarURL)
    .addField("Commande Indisponible !",  "Désolé, cette commande est actuellement indisponible, regardez le t!help pour savoir l'état de la commande", true)
    .setFooter("© 🔱Road Rage France🔱#2987")
    .setTimestamp()
    message.channel.send(embed)
}

})