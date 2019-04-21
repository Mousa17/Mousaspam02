const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("569231075692511244")
setInterval(function() {
channel.send(`الله اكبر`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
