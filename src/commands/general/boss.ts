import { SlashCommandBuilder } from "discord.js";
import { command, getTimeRemaining } from "../../utils";
import { getBossInfo } from "../../api";
import { CreateBossEmbed } from "../../embed";

const meta = new SlashCommandBuilder()
  .setName("boss")
  .setDescription("Display next boss spawn time and location");

export default command(meta, async ({ interaction }) => {
  await getBossInfo().then(({ bossName, bossTime, bossZone }) => {
    const { remainingHours, remaningMinutes } = getTimeRemaining(bossTime);

    interaction.reply({
      ephemeral: false,
      embeds: [
        CreateBossEmbed({
          remainingHours,
          remaningMinutes,
          bossName,
          spawnTime: bossTime,
          zone: bossZone,
        }),
      ],
    });
  });
});
