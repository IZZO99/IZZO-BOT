const fs = require("fs");
const Discord = require("discord.js");
module.exports = {
  name: "comment",
  aliases: [""],
  enabled: true,			
  memberPermissions: [ "SEND_MESSAGES" ],			
  botPermissions: [ "SEND_MESSAGES", "ATTACH_FILES" ],		
  ownerOnly: false,			
  cooldown: 6000,
run: (client ,message, args) => message.channel.send({
    files: [{
      name: 'youtube.png',
      attachment: [
        'https://some-random-api.ml/canvas/youtube-comment?avatar=',
        message.author.displayAvatarURL({format: 'png', size:1024}),
        `&username=${message.member.displayName}`,
        `&comment=${args.join(' ')}`
      ].join('')
    }]
  })
};
