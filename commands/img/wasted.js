const fs = require("fs");
const Discord = require("discord.js");
module.exports = {
  name: "wasted",
  aliases: ["was","Wasted"],
  enabled: true,			
  memberPermissions: [ "SEND_MESSAGES" ],			
  botPermissions: [ "SEND_MESSAGES" ],		
  ownerOnly: false,			
  cooldown: 6000,
run: async (client, message) => {

    const match = message.content.match(/\d{17,19}/);
    let user;

    if (message.guild){
      const member = await message.guild.members
      .fetch((match || [message.author.id])[0])
      .catch(() => message.member);

      user = member.user;
    } else {
      user = message.author;
    };

    return message.channel.send({
      files: [{
        name: 'wasted.gif',
        attachment: [
          'https://some-random-api.ml/canvas/wasted/?avatar=',
          user.displayAvatarURL({ format: 'png', size: 1024 })
        ].join('')
      }]
    });
  }
};
