const { MessageEmbed } = require('discord.js')

module.exports = {
    emoji: '🏓', //OPTIONAL
    name: 'ping',
    description: 'Ping Pong! Just kidding.', //OPTIONAL
    execute(client, message, args) {
        
        message.channel.send('\`🏓\` **- Getting my ping ...**').then(result_message => {

			const ping = result_message.createdTimestamp - message.createdTimestamp;
            result_message.delete()
			const latencies = new MessageEmbed()
                .setTitle(`'${client.user.username}' Latency Test`)
				.setColor('BLURPLE')
				.addField(`Ping`, `\`${ping} ms\``)
				.addField(`API Latency`, `\`${Math.round(client.ws.ping)} ms\``)
				.setTimestamp()
			message.channel.send({ embeds: [latencies]});
		})

    },
}