const express = require('express');
const app = express();
const chalk = require("chalk");

app.get('/', (req, res) => {
        res.send('Hello Express app!')
})
app.use('/ping', (req, res) => {
        res.send(new Date());
});
app.listen(3000, () => {
        console.log(chalk.red.bold('Express is ready.'))
});

const Discord = require("discord.js");

const { Client , MessageActionRow , MessageButton , MessageEmbed , MessageSelectMenu , Intents } = require("discord.js");


const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_BANS,
        Intents.FLAGS.GUILD_INTEGRATIONS,
        Intents.FLAGS.GUILD_WEBHOOKS,
        Intents.FLAGS.GUILD_INVITES,
        Intents.FLAGS.GUILD_VOICE_STATES,
        Intents.FLAGS.GUILD_PRESENCES,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.GUILD_MESSAGE_TYPING,
        Intents.FLAGS.DIRECT_MESSAGES,
        Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
        Intents.FLAGS.DIRECT_MESSAGE_TYPING,
    ],
  allowedMentions: { repliedUser: false }, ws: {properties: { $browser:"Discord iOS" }
      },
});

const db = require("quick.db");
const ms = require("ms");

const prefix = "+";

client.on('ready', () => {
console.log(`${client.user.tag}`)
 client.user.setActivity(`${prefix}help`, { type: 'WATCHING' })  
});



client.on('messageCreate', message => {     if (message.mentions.has(client.user)) {         message.channel.send('hi there!');     } });





client.login("MTAzMjY5NTc3NjM3NzMxOTQ0NQ.GQ3dJZ.QkiLt_Ry1NEHzxJe-1dimhzISTsoNKZknrgZ8Y").catch((err) => {
   console.log(err.message)
});
