import { Client, Intents } from "discord.js";

require('dotenv').config();

const token = process.env.TOKEN || "N/A";
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.on("ready", () => {
  if(client && client.user) {
    console.log(`Logged in as ${client.user.tag}!`);
  }
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === "ping") {
    await interaction.reply("Pong!");
  }
});

client.login("OTEwMzM5MzEyMTE2MTcwNzYy.YZRZjQ.SpPxz-ekDKXdozoRaDKLUUh73kw");
