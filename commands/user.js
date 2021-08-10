const { MessageEmbed } = require('discord.js');

module.exports = {
    emoji: '😸', //OPTIONAL
    name: 'user',
    description: 'Shows user related info!', //OPTIONAL
    async execute(client, message, args) {

        //CHECKING IF A USER HAS BEEN MENTIONED OR AN ID HAS BEEN PROVIDED
        if(!message.mentions.users.first() && !args[0]) return message.channel.send(`\`❌\` **${message.author} - You need to \`mention\` a user of give me their \`user id\`**`);

        //FETCHING THE USER IF AN ONLY ID HAS BEEN PROVIDED
        var user;
        if(args[0] && !message.mentions.users.first()) {
            user = await client.users.fetch(args[0])
                .catch(error => client.error(error,message.channel));
            if(!user) return;
        } else if(message.mentions.users.first()) user = message.mentions.users.first();
        
        //FORMAT user.createdAt DATE
        var dd = user.createdAt.getDate();
        var mm = user.createdAt.getMonth()+1; 
        var yyyy = user.createdAt.getFullYear();

        if(dd<10) dd='0'+dd;
        if(mm<10) mm='0'+mm;

        var createdAt = dd+'/'+mm+'/'+yyyy;

        const user_embed = new MessageEmbed()
            .setTitle(`${user.tag}`)
            .setThumbnail(user.displayAvatarURL({ dynamic: true }) || null)
            .setColor('DARK_GREEN')
            .setDescription(`\`🤖\` \`Bot\` **- \`${user.bot ? '✔️' : '❌'}\`**\n\`📆\` \`Created\` **- \`${createdAt}\`**\n\n\`🔧\` \`ID\` **- \`${user.id}\`**`)
            .setFooter('Created by JerryFox#0001')
        return message.channel.send({ embeds: [user_embed] })

        //HERE'S EVERYTHING THE USER OBJECT GIVES YOU:
        //https://discord.com/developers/docs/resources/user

    },
}