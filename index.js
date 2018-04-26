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
    message.channel.send("__**Voici les commandes disponibles**__ :\n\n __**Légende**__ :\n\n ✅ : __Commande Disponible__\n ❌ : __Commande temporairement désactivée__\n 🚧 : __Commande en cours de développement__\n\n __t!help__ Pour la liste des commandes ✅\n __t!chaine__ pour avoir le lien de ma chaîne YouTube ✅\n\n__t!addrole__ ou __t!ar__ Pour ajouter une personne à un rôle ❌\n__t!ban__ Pour bannir un utilisateur ✅\n__t!kick__ Pour kicker un utilisateur ✅\n__t!createrole NOM DU ROLE__ ou __t!cr NOM DU ROLE__ Pour créer un rôle ✅\n__t!createchannel NOM DU CHANNEL__ ou __t!cc NOM DU CHANNEL__ Pour créer un channel ✅\n__t!removerole NOM DU ROLE PSEUDO__ ou __t!rr NOM DU ROLE PSEUDO__ Pour enlever un rôle à quelqu'un ❌\n__t!reseaux__ Pour avoir tous mes réseaux sociaux 🚧");
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

if (message.content.startsWith(prefix + "addrole") || message.content.startsWith(prefix + "ar")) {
    message.channel.send("Commande actuellement indisponible...");
    console.log("addrole");
}

if(message.content.startsWith(prefix + "removerole") || message.content.startsWith(prefix + "rr")) {
    message.channel.send("Commande actuellement indisponible...");
    console.log("removerole");

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
                
})