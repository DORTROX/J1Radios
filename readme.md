<div align="center">   
    <h1>ONGAKU - A DISCORD JAPANESE RADIO BOT</h1>
    <h3>A Discord bot that can play japanese J1Radio written in D.jsV14</h3>
<img src ="https://cdn.discordapp.com/attachments/961548194884513842/1084547863775809536/anime-train.gif"/>

  `D O R T R O 乂#5516`

</div>

# Usage 

Commands are created using SlashCommand. You Can access them using `/change_channel`.

<img src="https://user-images.githubusercontent.com/78467470/224567078-f310d220-312f-48c5-8a15-492a12c66982.png">
<br>

From the Select menu, You can select any one available radio and it will start working.

<img src="https://user-images.githubusercontent.com/78467470/224567135-5222aab0-6f60-4cbd-b57a-7464d4bc5256.png">


# Installation

- # Github
    - Clone the repo
    - Open the J1Radios Folder

- # Setup
    - Considering you already have `node.js` in your system
        - Open your terminal and run `npm i` to install the required modules.
        - Make a `.env` file inside the directory and add the following in your file. <br><br>
            - <pre>
                token="your-bot-token-here"
                clientId="your-client-id"
                ChannelID="your-channel-id"
            </pre>

    - # Important Modification
        - There is a issue found in `@discord/voice` <a href="https://github.com/discordjs/discord.js/issues/9185">VoiceConnection stuck in signalling state about a minute after creating it.</a>
        - A temporary fix for this is opening the file in `node_modules/@discordjs/voice/dist/index.js` and addding `this.configureNetworking();` in line 1361.
        <br><br>
    > Note: There might be a a 1000ms or less pause in between every 60 seconds. But this is all we have till it get fixed by discord V14