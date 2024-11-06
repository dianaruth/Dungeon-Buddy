require("dotenv").config();

const prodEnv = process.env.NODE_ENV === "production";

// Define and export the token based on the environment
module.exports = {
    token: prodEnv ? process.env.PROD_BOT_TOKEN : process.env.TEST_BOT_TOKEN,
    clientId: prodEnv ? process.env.PROD_CLIENT_ID : process.env.TEST_CLIENT_ID,
    guildId: prodEnv ? process.env.PROD_GUILD_ID : process.env.TEST_GUILD_ID,
    publicKey: prodEnv ? process.env.PROD_PUBLIC_KEY : process.env.TEST_PUBLIC_KEY,
    tankEmoji: prodEnv ? `<:tankrole:1193998691200159754>` : `<:tankrole:1181327150708686848>`,
    healerEmoji: prodEnv ? `<:healerrole:1193998685894357172>` : `<:healerole:1181327153749561364>`,
    dpsEmoji: prodEnv ? `<:dpsrole:1193998689056870430>` : `<:dpsrole:1181327148624117870>`,
};
