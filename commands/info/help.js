const Discord = require("discord.js");

module.exports = {
  name: "help",
  aliases: ["h"],
  description: "Help Command!",
  usage: "o/Help | <Command Name>",
  run: async(client, message, args) => {
    
  let embed = new Discord.MessageEmbed()
     .setColor("RANDOM")
     .setFooter(`Request By | ${message.author.tag}`) 
     .setTitle(`list of all commands`)
     .setDescription(`[ Invite Bot ](https://discord.com/api/oauth2/authorize?client_id=816340990859673631&permissions=8&scope=bot)`)
     .addField("🛠 Moderation", "`ban`, `kick`, `clear`, `moveall`, `hide` ,`show`, `mute`, `unmute`, `vmute`, `vunmute`, `deafen` ,`undeafen`, `lock`, `unlock`, `slowmode`, `backup`, `allbots` ,`vkick`, `unban`")
     .addField("ℹ️ Info", "`help`, `invite`, `ping`, `listemoji`, `roles` ,`botinfo`, `userinfo`, `serverinfo`, `serveravatar`, `numberinvite`, `avatar`")
     message.channel.send(embed);
    }
}
