const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "invite",
  aliases: ["link"],
  description: "Help Command!",
  usage: "o/Help | <Command Name>",
  run: async(client, message, args) => {
let embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle(`link Bot`)
      .setURL(
        "https://discord.com/api/oauth2/authorize?client_id=816340990859673631&permissions=8&scope=bot"
      )
        message.channel.send(embed);
  }
}
