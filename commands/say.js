module.exports = {
    emoji: '😃', //OPTIONAL
    name: 'say',
    description: 'Make the bot say something!', //OPTIONAL
    execute(client, message, args) {
        
        if(!args.length) return message.channel.send({ content: "What do you want me to say?", reply: { messageReference: message.id }});
        message.channel.send(`${args.join(' ')}`)

    },
}