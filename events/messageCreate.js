const CONFIG = require('../config.json')

module.exports = (client, message) => {
    if(message.type === "DM" || message.author.bot) return;
    if(!message.content.toLowerCase().startsWith(CONFIG.prefix)) return;

    const args = message.content.slice(CONFIG.prefix.length).trim().split(/ +/);

    const command_name = args.shift().toLowerCase();
    if(!command_name) return;
    
    const command = client.botCommands.get(command_name)
    if(!command) return message.channel.send(`\`❌\` **${message.author} - Sorry, that command does not exist!**`)
    try {
        command.execute(client, message, args);
    } catch (error) {
        return client.error(error,message.channel)
    }
}