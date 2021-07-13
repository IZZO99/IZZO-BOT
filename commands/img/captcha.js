const fs = require("fs");
const Discord = require("discord.js"),
      fetch = require("node-fetch");
module.exports = {
  name: "captcha",
  aliases: ["Captcha"], 
  description: "", 
  usage: ["captcha @user"], 
  enabled: true,
  memberPermissions: [ "SEND_MESSAGES" ],
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
  ownerOnly: false,
  cooldown: 6000,
  run: async (client, message, args, dev,dev2) => {
  let user = message.mentions.members.first()
  let reva = await Lang.findOne({ guildID: message.guild.id })
  if (!user) return message.reply(client.reva.get(reva.language, "img","miss_mention"));
  let a = await message.channel.send(client.reva.get(reva.language, "img","loding", {file: "captcha"}))
  const res = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=captcha&username=${user.user.username}&url=${user.user.displayAvatarURL({ format: "png", size: 512 })}`));
  const json = await res.json();
  const attachment = new Discord.MessageAttachment(json.message, "captcha.png");
  message.channel.send(attachment);
  await a.delete()
	}
}
