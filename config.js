require('dotenv').config();

// Define and export the token based on the environment
module.exports = {
    token: process.env.BOT_TOKEN,
    clientId: process.env.CLIENT_ID,
    guildId: process.env.GUILD_ID,
    publicKey: process.env.PUBLIC_KEY,
    tankEmoji: `<:tankrole:1193998691200159754>`,
    healerEmoji: `<:healerrole:1193998685894357172>`,
    dpsEmoji: `<:dpsrole:1193998689056870430>`
};
