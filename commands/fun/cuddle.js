const Discord = require("discord.js");
const sakran = require('nekos.life');
const neko = new sakran();

module.exports = {
  name: "cuddle",
  aliases: [""],
  description: "Help Command!",
  usage: "o/Help | <Command Name>",
  run: async(client, message, args) => {


    const user = message.mentions.users.first();
        if(!user)
        return message.reply('Mention someone to cuddle');

        async function work() {
        let owo = (await neko.sfw.cuddle());

        const cuddleembed = new Discord.MessageEmbed()
        .setTitle(user.username + " You just got a cuddle! ")
        .setDescription((user.toString() + " got a cuddle from " + message.author.toString()))
        .setImage(owo.url)
        .setColor(`BLACK`)
        .setURL(owo.url);
        message.channel.send(cuddleembed);

}

      work();
  }
};
