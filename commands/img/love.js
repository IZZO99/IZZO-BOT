const fs = require("fs");
const Discord = require("discord.js"),
      fetch = require("node-fetch");
module.exports = {
  name: "love",
  aliases: ["Love"],
  description: "create a love image", 
  usage: ["love @user1"],
  enabled: true,
  memberPermissions: [ "SEND_MESSAGES" ],	
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],	
  ownerOnly: false,	
  cooldown: 6000,
  run: async (client, message, args, dev,dev2) => {
  let users = message.mentions.members.first()
  let reva = await Lang.findOne({ guildID: message.guild.id })
  if (!users) return message.reply(client.reva.get(reva.language, "img","miss_mention"));
  let a = await message.channel.send(client.reva.get(reva.language, "img","loding", {file: "love"}))
  
  const res = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=ship&user1=${users.user.displayAvatarURL({ format: "png", size: 512 })}&user2=${message.author.displayAvatarURL({ format: "png", size: 512 })}`));	
  const json = await res.json();
  const attachment = new Discord.MessageAttachment(json.message, "love.png");	
  message.channel.send(attachment);
  await a.delete()
  }
}
