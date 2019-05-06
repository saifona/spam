const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("574669915181678698")
setInterval(function() {
channel.send(`SNAKE GAME`);
}, 30)
})

client.login(process.env.BOT_TOKEN);