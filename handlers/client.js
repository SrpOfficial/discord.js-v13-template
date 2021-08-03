const { Client, Collection } = require("discord.js");

/**
 * 
 * @param {Client} client 
 */

module.exports = async (client) => {
    client.commands = new Collection();
    client.slashcommands = new Collection();
    client.config = require("../config.json");
}