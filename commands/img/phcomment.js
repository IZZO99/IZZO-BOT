const fs = require("fs");
const Discord = require("discord.js"),
      fetch = require("node-fetch");
module.exports = { 
name: "phcomment", 
aliases: ["pcomment","Pcomment","PHcomment","Phcomment"],
description: "",
usage: ["phcomment @user <args>"],
enabled: true,
memberPermissions: [ "SEND_MESSAGES" ], 
botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
ownerOnly: false, 
cooldown: 6000,
run: async (client, message, args, dev,dev2) => {
  let use = message.mentions.members.first()
  let text = args.slice(2).join(" ")
    let reva = await Lang.findOne({ guildID: message.guild.id })
  if (!use) return message.reply(client.reva.get(reva.language, "img","miss_mention"));
  let user = use.user
  if (!text) text = "no comment"
  let a = await message.channel.send(client.reva.get(reva.language, "img","loding", {file: "phcomment"}))
  const res = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=phcomment&username=${user.username}&image=${user.displayAvatarURL({ format: "png", size: 512 })}&text=${text}`));	
  const json = await res.json();	
  const attachment = new Discord.MessageAttachment(json.message, "phcomment.png");	
  message.channel.send(attachment);
  await a.delete();
  }
}
