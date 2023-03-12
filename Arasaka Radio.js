const Discord = require("discord.js");

const {
  REST,
  Routes,
  Events,
  Client,
  GatewayIntentBits,
} = require("discord.js");

const Interaction = require("./handlers/InteractionHandler");
const path = require("node:path");
const CommandLoader = require("./handlers/CommandsLoader");
const { VoiceConnectionStatus } = require( '@discordjs/voice' );



require("dotenv").config();

const Dortrox = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildVoiceStates,
  ],
});

Dortrox.commands = new Discord.Collection();

const CommandPath = path.join(__dirname, "commands");
const commandsArray = CommandLoader(CommandPath, Dortrox.commands);
const rest = new REST({ version: "10" }).setToken(process.env.token);

(async () => {
  try {
    console.log(
      `Started refreshing ${commandsArray.length} application (/) commands.`
    );

    const data = await rest.put(
      Routes.applicationCommands(process.env.clientId),
      { body: commandsArray }
    );

    console.log(
      `Successfully reloaded ${data.length} application (/) commands.`
    );
  } catch (error) {
    console.error(error);
  }
})();


Dortrox.once(Events.ClientReady, async (c) => {
  console.log(`Logged In As ${c.user.tag}`);
});

Dortrox.on(Events.InteractionCreate, async (interaction) => {
  try {
    await Interaction(interaction, Dortrox);
  } catch (error) {
    console.log(error);
  }
});

Dortrox.login(process.env.token);
