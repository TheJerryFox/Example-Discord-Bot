const { MessageEmbed} = require('discord.js');
const CONFIG = require('../config.json');

module.exports = {
    emoji: '📝', //OPTIONAL
    name: 'help',
    description: 'A list of my commands!', //OPTIONAL
    execute(client, message) {
        
        const help_embed = new MessageEmbed()
            .setTitle(`${client.user.username}'s Commands`)
            .setURL(`https://github.com/JerryFunHouse/Beginner-Discord-Bot`)
            .setThumbnail(client.user.displayAvatarURL())
            .setColor('GREEN')
            .setDescription(`**Prefix:** \`${CONFIG.prefix}\`\n\n${client.botCommands.map(command => `\`${command.emoji || '✔️'}\` \`${command.name}\` - *${command.description || `No description available.`}*`).join(`\n`)}`)
            .setFooter('Created by JerryFox#0001')
        return message.channel.send({ embeds: [help_embed] })

    },
}