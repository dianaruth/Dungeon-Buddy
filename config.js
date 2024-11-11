require('dotenv').config();

// Define and export the token based on the environment
module.exports = {
    token: process.env.BOT_TOKEN,
    clientId: process.env.CLIENT_ID,
    guildId: process.env.GUILD_ID,
    publicKey: process.env.PUBLIC_KEY
};
