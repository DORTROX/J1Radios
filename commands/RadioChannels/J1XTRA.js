const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const {
  createAudioPlayer,
  createAudioResource,
  joinVoiceChannel,
} = require("@discordjs/voice");
require("dotenv").config();


module.exports = {
  data: new SlashCommandBuilder()
    .setName("hidden_j1_xtra")
    .setDescription("J1XTRA"),
  async execute(interaction,Dortrox) {
    let embed = new EmbedBuilder()
      .setColor("Aqua")
      .setTitle("Radio Channel Switched")
      .setThumbnail()
      .setDescription("Playing J1 XTRA Now.\n")
      .setImage(
        "https://media1.tenor.com/images/b3b66ace65470cba241193b62366dfee/tenor.gif"
      );
    const player = createAudioPlayer();
    const resource = createAudioResource(
      "https://jenny.torontocast.com:2000/stream/J1XTRA"
    );
    const channel = await Dortrox.channels.fetch(process.env.ChannelID);
    const connection = joinVoiceChannel({
      channelId: channel.id,
      guildId: channel.guildId,
      adapterCreator: channel.guild.voiceAdapterCreator,
    });
    connection.subscribe(player);
    player.play(resource);
    await interaction.reply({ embeds: [embed] });
  },
};
