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
     .setDescription(`[ Invite Bot ](https://discord.com/api/oauth2/authorize?client_id=816340990859673631&permissions=8&scope=bot)\n
     .addField("🛠 Moderation", "`ban`, `kick`, `clear`, `mute`, `unmute`, `vmute`, `vunmute`, `lock`, `unlock`, `slowmode`, `vkick`, `unban`")
     .addField("👻 Fun", "`kiss`, `slap`, `hug`, `pat`, `poke` ,`cuddle`, `feed`")
     .addField("ℹ️ Info", "`help`, `invite`, `ping`, `roles` ,`botinfo`, `userinfo`, `serverinfo`, `serveravatar`, `avatar`")
      message.channel.send(embed);
    }
}
