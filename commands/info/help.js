const Discord = require("discord.js");

module.exports = {
  name: "help",
  aliases: ["h"],
  description: "Help Command!",
  usage: "o/Help | <Command Name>",
  run: async(client, message, args) => {
    
  let embed = new Discord.MessageEmbed()
     .setColor("f1c40f")
     .setFooter(`Request By | ${message.author.tag}`) 
     .setTitle(`list of all commands`)
     .setDescription(`[ **Invite** ](https://discord.com/api/oauth2/authorize?client_id=844516322548776970&permissions=3691375729&scope=bot)`)
     .addField("🛠 Moderation", "`ban`, `kick`, `clear`, `moveall`, `hide` ,`show`, `mute`, `unmute`, `vmute`, `vunmute`, `deafen` ,`undeafen`, `lock`, `unlock`, `slowmode`, `backup`, `allbots` ,`vkick`, `unban`")
     .addField("👻 Fun", "`kiss`, `slap`, `hug`, `pat`, `poke` ,`cuddle`, `feed`")
     .addField("🎮 Game", "`slots`, `iq`, `ship`, `rate`, `respect` ,`rps`, `8ball`")
     .addField("ℹ️ Info", "`help`, `invite`, `ping`, `listemoji`, `roles` ,`botinfo`, `userinfo`, `serverinfo`, `serveravatar`, `numberinvite`, `avatar`")
     message.channel.send(embed);
    }
}
