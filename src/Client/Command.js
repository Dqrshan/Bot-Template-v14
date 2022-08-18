const Discord = require('discord.js'),
    Bot = require('./Bot'),
    Slash = Discord.ApplicationCommand.prototype.options
/**
 * @abstract
 * @param {Bot} client
 * @param {Discord.Message} message
 * @param {String[]} args
 * @returns {Promise<Discord.Message>}
 * Run method for the message command
 */
function RunFunction(client, message, args) {}

/**
 * @abstract
 * @param {Bot} client
 * @param {Discord.CommandInteraction} interaction
 * @returns {Promise<Discord.CommandInteraction>}
 * Run method for the slash command interaction
 */
function ExecFunction(client, interaction) {}

class Command {
    /**
     * @typedef {{
     *      name: string,
     *      description:string,
     *      category: string,
     *      aliases: array,
     *      permissions: import("discord.js").PermissionResolvable,
     *      usage: string,
     * 		slashOptions: Slash,
     *      run: RunFunction,
     * 		exec: ExecFunction
     * }} CommandOptions
     * @param {CommandOptions} options
     */
    constructor(options) {
        this.name = options.name
        this.description = options.description
        this.category = options.category
        this.aliases = options.aliases
        this.permissions = options.permissions
        this.usage = options.usage
        this.slashOptions = options.slashOptions

        this.run = options.run
        this.exec = options.exec
    }
}

module.exports = Command
