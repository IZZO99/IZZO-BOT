const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "roles",
  aliases: [],
 
  run: async(client, message, args) => {

let roles = message.guild.roles.cache.map(r => `> ${r.name} `).join("\n"); 
 let embed = new Discord.MessageEmbed()
  .setTitle("Server Roles") 
 .setDescription("```" + roles + "``` ");
  message.channel.send(embed); 
     }
  }
