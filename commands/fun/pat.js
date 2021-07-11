const Discord = require("discord.js");
const sakran = require('nekos.life');
const neko = new sakran();

module.exports = {
  name: "pat",
  aliases: [""],
  description: "Help Command!",
  usage: "o/Help | <Command Name>",
  run: async(client, message, args) => {


    const user = message.mentions.users.first();
        if(!user)
        return message.reply('Mention someone to pat');

        async function work() {
        let owo = (await neko.sfw.pat());

        const kissembed = new Discord.MessageEmbed()
        .setTitle(user.username + " You have been patted! ")
        .setDescription((user.toString() + " got patted by " + message.author.toString()))
        .setImage(owo.url)
        .setColor(`BLACK`)
        .setURL(owo.url);
        message.channel.send(kissembed);
}

      work();
  }
};
