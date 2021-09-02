const { ifError } = require("assert");
const { SlashCommandBuilder } = require("@discordjs/builders");
const Discord = require("discord.js");
const Client = new Discord.Client({
    intents:[
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});

const data = new SlashCommandBuilder()
    .setName("chaine")
    .setDescription("renvoie la chaine")
    .addUserOption(option => option.setName("utilisateur").setDescription("user que vous soiter mentionner").setRequired(false))

const prefix = "!";

Client.on("ready", async () =>{

    Client.guilds.cache.get("880140450852401193").commands.create(data);
//achanger en casde changement de server (880140450852401193)
console.log(Client.guilds.cache.get("880140450852401193").commands.fetch());
    await Client.guilds.cache.get("880140450852401193").commands.fetch();
    Client.guilds.cache.get("880140450852401193").commands.fetch()



    console.log("Lancer");
});

Client.on("interactionCreate", interaction =>{
    if(interaction.isCommand()){
        if(interaction.commandName === "chaine"){
            let user = interaction.options.getUser("utilisateur");

            if(user != undefined){
                //<@id>
                interaction.reply("starcoc 3515 <@" + user.id + ">")
            }
            else {
               interaction.reply("staroc 3515");
            }
        }
    }
});

Client.on("messageCreate",message => {
    if (message.author.bot) return;

    //!help

    if (message.content === prefix + "help"){
        const embed = new Discord.MessageEmbed()
            .setColor("#f00020")
         .setTitle("Liste des commandes")
         .setAuthor("Auteur du bot starcoc3")
         .setDescription("Vous trouverer ici la liste des commande du bot")
         .addField("!help","Affiche la liste des commande")
         .setTimestamp();
         
         message.channel.send({ embeds: [embed]});
    }
});





















Client.login("token");
