const { MessageEmbed } = require('discord.js');

module.exports = {
    emoji: '📊', //OPTIONAL
    name: 'server',
    description: 'Show server related infos!', //OPTIONAL
    async execute(client, message) {

        //FETCHING ALL SERVER MEMBERS
        var members = await message.guild.members.fetch();

        //GETTING THE AMOUNT OF BOTS
        var botSize = members.filter(member => member.user.bot).size;
        //GETTING THE AMOUNT OF USERS
        var userSize = message.guild.memberCount - botSize;
        
        //FORMAT guild.createdAt DATE
        var dd = message.guild.createdAt.getDate();
        var mm = message.guild.createdAt.getMonth()+1; 
        var yyyy = message.guild.createdAt.getFullYear();

        if(dd<10) dd='0'+dd;
        if(mm<10) mm='0'+mm;

        var createdAt = dd+'/'+mm+'/'+yyyy;

        const server_embed = new MessageEmbed()
            .setTitle(message.guild.name)
            .setThumbnail(message.guild.iconURL())
            .setColor('NAVY')
            .setDescription(`\`👤\` \`Owner\` **- <@${message.guild.ownerId}>**\n\`🙂\` \`Members\` **- \`${message.guild.memberCount}\`**\n\n\`🤖\` \`Bots\` **- \`${botSize}\`**\n\`👋\` \`Users\` **- \`${userSize}\`**\n\n\`🎉\` \`Roles\` **- \`${message.guild.roles.cache.size}\`**\n\`📆\` \`Created\` **- \`${createdAt}\`**`)
            .setFooter('Created by JerryFox#0001')
        return message.channel.send({ embeds: [server_embed] })

        //HERE'S EVERYTHING THE GUILD OBJECT GIVES YOU:
        //https://discord.com/developers/docs/resources/guild

    },
}