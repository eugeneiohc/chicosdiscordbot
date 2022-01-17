import { Client, Intents } from "discord.js";
require("dotenv").config();

const token = process.env.TOKEN;
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once("ready", () => {
  console.log("Armed and Ready!");
});

client.on("ready", () => {
  if (client && client.user) {
    console.log(`Logged in as ${client.user.tag}!`);
  }
});

// interactions
client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;

  if (commandName === "ping") {
    await interaction.reply("pong");
  } else if (commandName === "server") {
    await interaction.reply("This shit's just running on my laptop -Keepo")
  } else if (commandName === "user") {
    await interaction.reply("keepo")
  }
});

client.login(token);
