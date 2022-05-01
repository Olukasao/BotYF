const DiscordJS = require("discord.js")
require('dotenv').config()
const client = new DiscordJS.Client({
    intents: [
        DiscordJS.Intents.FLAGS.GUILDS,
        DiscordJS.Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on("ready,", () => {
    console.log("o bot esta online");
})

client.on("messageCreate", (message) => {
    if (message.content == "ping") {
         message.reply({
             content: "pong!",
         })
    }
})

client.login(process.env.TOKEN)

const { joinVoiceChannel } = require('@discordjs/voice');

client.on("ready", () => {

    let channel = client.channels.cache.get("895789448053268491");

    joinVoiceChannel({
        channelId: channel.id,
        guildId: channel.guild.id,
        adapterCreator: channel.guild.voiceAdapterCreator,
    })

    console.log("✅ - Entrei no canal de vóz [" + channel.name + "] com sucesso.")
});

client.on("messageCreate", (messsage) => {

    let channel = client.channels.cache.get("");

    joinVoiceChannel({
        channelId: channel.id,
        guildId: channel.guild.id,
        adapterCreator: channel.guild.voiceAdapterCreator,
    })

});

client.on("ready", () => {

    let canal = client.channels.cache.get("895789616592982056")
    function greet() {

        canal.send('spawn em 10 segundos');             
             
    }setInterval(greet, 10000)

})