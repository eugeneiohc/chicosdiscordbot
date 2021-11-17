import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v9";

const commands = [
  {
    name: "ping",
    description: "Replies with Pong!",
  },
];

const token = process.env.TOKEN || "N/A";
const client_id = process.env.CLIENT_ID || "N/A";
const guild_ids = {
  cmu: process.env.GUILD_ID_CMU || "N/A"
}

const rest = new REST({ version: "9" }).setToken(token);

(async () => {
  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationGuildCommands(client_id, guild_ids.cmu), {
      body: commands,
    });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
})();
