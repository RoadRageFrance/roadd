const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("t!");
var number = 0;
var game = false;

function game1(){
    bot.user.setActivity("Besoin d'aide ? " + prefix + "help");
    setTimeout(game2, 5000);
};

function game2(){
    bot.user.setActivity(`© 🔱Road Rage France🔱`);
    setTimeout(game3, 5000);
};

function game3(){
    bot.user.setActivity(`${bot.guilds.array().length} serveurs | ${bot.users.size} utilisateurs`);
    setTimeout(game1, 5000);
};

bot.on('ready', () =>  {
    console.log("Je suis connecté !")
    setTimeout(game1, 5000)
  });

bot.login(process.env.TOKEN)

    bot.on("guildMemberAdd", member => {
        const bvn = member.guild.channels.find(m => m.name === "accueil-messages");
if(!bvn) return;
bvn.send(`**Bienvenue sur le serveur Road Rage France Communauté ${member} !**`)
console.log("quit")
})

bot.on("guildMemberRemove", member => {
    const bye = member.guild.channels.find(m => m.name === "accueil-messages");
if(!bye) return;
bye.send(`**${member.tag} vient de nous quitter...**`)
console.log("quit")
})

bot.on('message', message => {

    if(message.content.startsWith(prefix + "bvn")) {
        let embed = new Discord.RichEmbed() 
    
            .setDescription("Bienvenue sur le serveur **Road Rage France Communauté !**") 
    
            .addField("__Es-tu un abonné ?__", "Répondre avec :white_check_mark: : (oui) ou :x:(non)") 
    
            .setColor("#FE9901") 
    
            .setTimestamp() 
    
            .setFooter(`Bienvenue sur **${message.guild.name}** | © 🔱Road Rage France🔱#2987`) 
    
        message.guild.channels.find("name", "bienvenue").send(embed) 
    
        .then(function (message) { 
    
            message.react("✅") 
    
            message.react("❌") 
    
        }).catch(function() { 
    
        });
        }

    if(message.content.startsWith(prefix + "help")) {
  
        message.delete(message.author)
        let embed = new Discord.RichEmbed()
        .setColor('#FE9901')
        .setAuthor("Liste des commandes", bot.user.avatarURL)
        .setTitle("Road Rage Bot JR")
        .setDescription("__**Voici les commandes disponibles**__ :\n\n\n" +
        "__**Légende**__ :\n\n\n" + 
        ":white_check_mark: : __Commande Disponible__\n\n" +
        ":x: : __Commande temporairement désactivée__\n\n" +
        ":construction: : __Commande en cours de développement__\n\n" +
        "**t!help** Pour la liste des commandes :white_check_mark:\n\n" +
        "**t!chaine** pour avoir le lien de ma chaîne YouTube :white_check_mark:\n\n" +
        "**t!addrole** ou **t!ar** Pour ajouter une personne à un rôle :white_check_mark:\n\n" +
        "**t!ban** Pour bannir un utilisateur :white_check_mark:\n\n" +
        "**t!kick** Pour kicker un utilisateur :white_check_mark:\n\n" +
        "**t!createrole** ou **t!cr** Pour créer un rôle :white_check_mark:\n\n" +
        "**t!createchannel** ou **t!cc** Pour créer un channel :white_check_mark:\n\n" +
        "**t!removerole** ou **t!rr** Pour enlever un rôle à quelqu'un :white_check_mark:\n\n" +
        "**t!reseaux** Pour avoir tous mes réseaux sociaux :white_check_mark:\n\n" +
        "**t!justeprix** ou **t!jp** Pour commencer une partie du Juste Prix :white_check_mark:\n\n" +
        "**t!stoppartie** ou **t!sp** Pour arrêter une partie en cours du Juste Prix :white_check_mark:\n\n" +
        "**t!OM** Pour envoyer un texte de supporter de l'OM + un Gif sympa :white_check_mark:\n\n" +
        "**t!PSG** Pour envoyer un texte troll à propos du PSG + une photo sympa (Allez l'OM) :white_check_mark:\n\n" +
        "**t!serveurinfos** ou **t!si** Pour avoir toutes les infos sur le serveur :white_check_mark:\n\n" +
        "**t!botinfos** ou **t!bi** Pour avoir toutes les infos sur le bot :white_check_mark:\n\n" +
        "**t!userinfos** ou **t!ui** Pour avoir toutes les infos sur un utilisateur :white_ceck_mark:\n\n" +
        "**t!france** ou **t!fr** Pour envoyer un texte de supporter des Bleus + une image sympa :white_check_mark:\n\n" +
        "**t!afk** Pour signaler aux autres membres que vous êtes absents pour une courte durée :white_check_mark:\n\n" +
        "**t!amende** Pour donner une amende à quelqu'un (Admins uniquement) :white_check_mark:\n\n" +
        "**t!purge** Pour supprimer des messages (de 2 à 100 (Admins uniquement))"
        )
        .setFooter(`Commande exécutée par ${message.author.tag}`)
        .setTimestamp()
        message.channel.send(embed)
        console.log("help")
        }

if(message.content.startsWith(prefix + "chaine")) {
    message.delete(message.author)
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
    message.delete(message.author)
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
    message.delete(message.author)
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
    message.delete(message.author)
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
            message.channel.send("**C'est gagné ! Le nombre était " + number + " !**", {
                file: "http://forum.dequaliter.com/uploads/default/original/1X/fdc9b65f3349143d079f2ee0e96b5eaf064e8f34.gif"
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
    .setFooter(`Commande exécutée par ${message.author.tag}`)
    .setTimestamp()
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
    .setFooter(`Commande exécutée par ${message.author.tag}`
    .setTimestamp())
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
    .setTimestamp()
    message.channel.send(embed)
}

if (message.content.startsWith(prefix + "userinfo") || message.content.startsWith(prefix + "ui")){
    let user = message.mentions.users.first() ? message.mentions.users.first() : message.author
let member = message.guild.member(user);
let roles = [];
if (member.roles.size > 0) {
member.roles.forEach(r => {
    if(
!r.name.includes("everyone")
)
{
    roles.push(r.name);
}
})
} else {
roles = "no";
}
let ttt = (member.roles.size > 0) ? roles.length : "0";
let wato = (roles.length > 0) ? roles.join(", ") : "None";
let game = (!!user.presence && user.presence !== null && user.presence.game !== null && user.presence.game.name !== null) ? user.presence.game.name : "Nothing"
let embed = {
author: {
    name: user.username,
    icon_url: (user.avatarURL !== null) ? user.avatarURL : "https://maxcdn.icons8.com/Share/icon/Logos//discord_logo1600.png"
},
color: 0xC3FE01,
thumbnail: {
    url: (user.avatarURL !== null) ? user.avatarURL : "https://maxcdn.icons8.com/Share/icon/Logos//discord_logo1600.png"
},
fields: [{
    name: "Utilisateur",
    value: user.username + "#" + user.discriminator,
    inline: true
}, {
    name: "ID",
    value: user.id,
    inline: true
}, {
    name: "Pseudo",
    value: (member.nickname !== null) ? member.nickname : user.username,
    inline: true
}, {
    name: "Jeu",
    value: "Joue a : " + game,
    inline: true
}, {
    name: "Statut",
    value: (user.presence !== null && user.presence.status !== null) ? user.presence.status : "Déconnecté",
    inline: true
}, {
    name: "Rejoins Le",
    value: member.joinedAt.toString(),
    inline: true
}, {
    name: "Compte Crée Le",
    value: user.createdAt,
    inline: true
}, {
    name: "Roles (" + ttt + ")",
    value: wato,
    inline: true
}]
}
message.channel.send("", {
embed
});
}

if(message.content.startsWith(prefix + "règlement")) {
    message.delete(message.author)
    let embed = new Discord.RichEmbed()
    .setColor('#FE9901')
    .setAuthor("Road Rage Bot JR", bot.user.avatarURL)
    .setDescription("\n:right_facing_fist:Bienvenue sur le discord Road Rage France :left_facing_fist:\n\n" +
    ":handshake: Règles Générales:handshake:\n\n" +
    "1 - Pas d'insultes\n\n" +
    "2 - Pas de harcèlement ou Autres\n\n" +
    "3 - Veuillez éviter les sujets délicats tels que la religion, la politique etc...\n\n" +
    "4 - Pas de spam autre que dans le salon /Spam/ prévu à cet effet\n\n" +
    "5 - Veuillez respecter l'ordre hiérarchique des grades (staff, admins...)\n\n" +
    "6 - Ayez un pseudo correct\n\n" +
    "7 - Aucune vente n'est autorisée\n\n" +
    "8 - Le respect est de rigueur\n\n" +
    "9 - Veuillez éviter de poster des images à caractères pornographiques ou gores etc... Sur l'accueil-messages\n\n" +
    "10 - Après ne pas avoir respecté les règles vous aurez des avertissements écrits (ban/kick si récidive)\n\n" +
    "11 - Si vous avez une réclamation à faire auprès du staff, rejoingnez le salon vocal /File D'Attente/, un membre du staff vous prendra en charge !\n\n" +
    "12 - Il est interdit d'effectuer la moindre commande dans un salon public autre que le salon /commandes/ prévu à cet effet !\n\n" +
    "13 - Il est interdit d'effectuer la moindre pub dans un salon public autre que le salon /pub/ prévu à cet effet !\n\n" +
    "14 - Il est interdit d'ajouter une réaction dans le salon 'amendes' (sauf pour la personne qui a donner l'amende)\n\n" +
    "Dès votre arrivée sur le serveur, l'équipe de modération considèrera que vous avez bien pris conscience des règles et que vous les avez assimilées\n" +
    " ")
    .setFooter("© 🔱Road Rage France🔱#2987")
    .setTimestamp()
    message.channel.send(embed)
}

if(message.content.startsWith(prefix + "france") || message.content.startsWith(prefix + "fr")) {
    message.delete(message.author)
    let embed = new Discord.RichEmbed()
    .setColor('#FE9901')
    .setAuthor("Road Rage France", bot.user.avatarURL)
    .setDescription("**Champions mon frère !!**")
    .setImage("https://cdn-media.rtl.fr/cache/D9IMnDZ2OneYqTf5CHxnxQ/880v587-0/online/image/2018/0715/7794129680_coupe-du-monde-2018-les-bleus-celebrent-leur-deuxieme-sacre.jpg")
    .setFooter(`Commande exécutée par ${message.author.tag}`)
    message.channel.send(embed)
    console.log("FR")
    }

    if(message.content.startsWith(prefix + "shop")) {
        message.delete(message.author)
        let embed = new Discord.RichEmbed()
        .setColor('#FE9901')
        .setAuthor("Road Rage Bot JR", bot.user.avatarURL)
        .setDescription("\n🛒 **Voici la liste des articles disponibles** 🛒\n\n" +
        "📋 **Note :** Utilisez **!!credits** dans le salon #commandes pour voir votre solde ! Pour recevoir 200$ par jour, utilisez **!!daily** toutes les 24h 📋\n\n" +
        "**-Grade Personnalisé : 40.000$** \n\n" +
        "**-Grade Gros Bonnet : 30.000$** \n\n" +
        "**-Grade Fortune : 20.000$** \n\n" +
        "**-Emoji personnalisé : 10.000$** \n\n" +
        "**Pour effectuer un achat, veuillez contacter © 🔱Road Rage France🔱#2987 en message privé !**\n\n")
        .setFooter("© 🔱Road Rage France🔱#2987")
        .setTimestamp()
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "AFK") || message.content.startsWith(prefix + "afk")) {
        message.delete(message.author)
        let role = message.guild.roles.find('name', 'AFK')
        if(message.member.roles.find('name', 'AFK')) {
            message.member.removeRole(role)
        message.reply("Vous n'êtes désormais plus AFK ! ✅")
        }
        else {
            message.member.addRole(role)
            message.reply("Vous êtes désormais AFK ⏳ ! Faites **t!afk** quand vous êtes de retour !")
        }
    }

    if(message.content.startsWith(prefix + "amende")) {
        if(message.guild.member(message.author).roles.find("name", "Admins")){
    
        
    
    let channelsend = message.guild.channels.find("name", "amendes")
    
    if(!channelsend) {
        return message.reply("Veuillez exécuter la commande dans le channel #amendes")
            .then(message => setTimeout(function(){message.delete()}, 5000)) 
            .catch(err => console.log(err)); 
    }
    
    let user = message.mentions.users.first();
    let args = message.content.substr(30);
    
    
    if(!user) {
        return message.reply("Veuillez mentionner une personne !")
            .then(message => setTimeout(function(){message.delete()}, 5000)) 
            .catch(err => console.log(err));
    }
    
    if(!args) {
        return message.reply("Veuillez fournir une raison")
            .then(message => setTimeout(function(){message.delete()}, 5000)) 
            .catch(err => console.log(err)); 
    }
    
            var sondage_embed = new Discord.RichEmbed()
                .setDescription("Amende\n")
                .addField(user.tag + "\n __Raison :__ " + args, "Amande payée ? Répondre avec :white_check_mark: si c'est le cas ou avec :x: si ça ne l'est pas !\n")
                .setColor("#FE9901")
                .setTimestamp()
                channelsend.send(sondage_embed)
            .then(function (message) {
                message.react("✅")
                message.react("❌")
            }).catch(function() {
            });
    
            message.delete()
        }else{
            return message.channel.send(" Désolé tu n'as pas la permission de donner des amendes !")
            .then(message => setTimeout(function(){message.delete()}, 5000)) 
            .catch(err => console.log(err)); 
        }
        console.log("Amende")
    }
    if(message.content.startsWith(prefix + "amende")) {
        if (message.channel.type === "dm") return;
    
        let user = message.mentions.users.first();
    
        if(!user) return;
    
        const ua = message.author;
    
        let mp = user
        
        var embed = new Discord.RichEmbed()
            .setAuthor(user.tag, user.avatarURL)
            .setDescription("Amende\n")
            .setColor("#FE9901")
            .addBlankField()
            .addField(`Bonjour ${user.tag}, une amende vous a été attribuée sur le serveur Road Rage France Communauté.`, `Veuillez vous rendre dans le channel <#481512298859462656> pour cocher la réaction :white_check_mark: si vous avez payé, ou sinon envoyez un message aux personnes ayant le rôle **🔱 EL PADRE 🔱** ou **Chefs-Staff**`)
            .addField("__Rappel :__", "Pour payer l'amende, exécutez la commande `!!credits @🔱Road Rage France🔱#2987 {PRIX}`, le bot vous répondra qu'il faut entrer un numéro a quatre chiffres en guise de confirmation de paiment, vous n'aurez plus qu'à l'entrer' et l'amende sera payée !")
            .setTimestamp()
            .setFooter(`Utilisateur qui vous a mis l'amende : ${ua.tag}`)
            user.send(embed)
      }

if(message.content.startsWith(prefix + "purge")){
    let myrole = message.guild.member(bot.user).hasPermission("MANAGE_MESSAGES");
    let yourole = message.guild.member(message.author).hasPermission("MANAGE_MESSAGES");

    if (!myrole) {
        return message.channel.send(":no_entry:**Je n'ai pas les permissions nécessaires pour effacer un/des message(s)**");
    }

    if (!yourole) {
        return message.channel.send(":no_entry:**Vous n'avez pas les permissions nécessaires**");
    }

    var suppression = message.content.substr(8);
    if (suppression > 101) {
        return message.reply(":warning:**La valeur que vous avez entré est invalide, merci de choisir une valeur comprise entre 2 et 100**");
    }
    message.channel.bulkDelete(suppression, true).then(ok => {
        message.reply("**Suppression de " + "" + suppression + "" + " messages**")
        .then(message => setTimeout(function(){message.delete()}, 1000))
        .catch(err => console.log(err));
    console.log("Purge")
})
}
})
