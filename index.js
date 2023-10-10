const Discord = require('discord.js');
const { Client } = require('discord.js');


const client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Discord.Intents.FLAGS.DIRECT_MESSAGES,
        Discord.Intents.FLAGS.GUILD_VOICE_STATES,
        Discord.Intents.FLAGS.GUILD_MEMBERS,
        Discord.Intents.FLAGS.GUILD_PRESENCES
    ]
});

client.commands = new Discord.Collection();



client.login('MTE0Njc5Njg2NTUyMjc2MTg3MQ.G1G-NO.Gqt85D2t_B0ZftsoyVDbsGDIZ0v3gO8qO0_kYY');