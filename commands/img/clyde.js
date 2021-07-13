const fs = require("fs");
const Discord = require("discord.js"),
      fetch = require("node-fetch");
module.exports = {
  name: "clyde",
  aliases: ["cly"],
  enabled: true,
  memberPermissions: [ "SEND_MESSAGES" ],
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS", "ATACH_FILES" ],
  ownerOnly: false,
  cooldown: 6000,
run: async (bot, message, args) => {

        let text = args.join(" ");
        if (!text) {
            return message.channel.send("**Enter Text**");
        }

        let m = await message.reply(`wait for loding clyde file.`);
        try {
            let res = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=clyde&text=${text}`));
            let json = await res.json();
            let attachment = new Discord.MessageAttachment(json.message, "clyde.png");
            message.channel.send(attachment);
            m.delete({ timeout: 5000 });
        } catch (e) {
            m.edit(e.message);
        }
    }
}
