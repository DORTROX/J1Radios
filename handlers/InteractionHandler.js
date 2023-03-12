const handleInteraction = async (interaction, Dortrox) => {
  if (interaction.isCommand()) {
    try {
      const command = Dortrox.commands.get(interaction.commandName);
      await command.execute(interaction);
    } catch (error) {
      console.error(error);
      if (interaction.replied || interaction.deferred) {
        await interaction.followUp({
          content: "There was an error while executing this command!",
          ephemeral: true,
        });
      } else {
        await interaction.reply({
          content: "There was an error while executing this command!",
          ephemeral: true,
        });
      } 
    }
  } else if (interaction.isStringSelectMenu()) {
    try {
        const SelectMenu = Dortrox.commands.get(interaction.values[0])
        await SelectMenu.execute(interaction,Dortrox)
    } catch (error) {
        console.log(error)
    }
  }
};

module.exports = handleInteraction;
