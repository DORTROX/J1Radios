const { ActionRowBuilder, StringSelectMenuBuilder, SlashCommandBuilder } = require('discord.js')


module.exports = {
    data: new SlashCommandBuilder()
        .setName('change_channel')
        .setDescription("Change's the radio channel for you"),
    async execute(interaction){
        try{
        const row = new ActionRowBuilder()
            .addComponents(
                new StringSelectMenuBuilder()
                    .setCustomId('select')
                    .setPlaceholder('Choose a Channel')
                    .addOptions(
                        {
                            label: 'j1_hits',
                            value: "hidden_j1_hits",
                        },
                        {
                            label: 'j1_xtra',
                            value: "hidden_j1_xtra"
                        },
                        {
                            label: 'j1_gold',
                            value: "hidden_j1_gold"
                        }
                    )
            )
        await interaction.reply({content: 'Radio Channel', components:[row]})
                    }catch( error ) {
                        console.log(error)
                    }
    }
}