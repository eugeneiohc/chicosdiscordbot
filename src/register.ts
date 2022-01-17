import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v9";
import { SlashCommandBuilder } from "@discordjs/builders";

require("dotenv").config();

const token = process.env.TOKEN || "N/A";
const client_id = process.env.CLIENT_ID || "N/A";
const guild_ids = {
  cmu: process.env.GUILD_ID_CMU || "N/A",
};

const commands = [
  new SlashCommandBuilder().setName("ping").setDescription("Replies with pong"),
].map((command) => command.toJSON);

const rest = new REST({ version: "9" }).setToken(token);

(async () => {
  for (const guild in guild_ids) {
    console.log("Started refreshing application (/) commands.");

    try {
      await rest.put(Routes.applicationGuildCommands(client_id, guild), {
        body: commands,
      });

      console.log(
        `Successfully reloaded application (/) commands for the server: ${guild}`
      );
    } catch (error) {
      console.error(error);
    }
  }
})();
