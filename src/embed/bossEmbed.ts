import { EmbedBuilder, time } from "discord.js";

type CreateBossEmbedProps = {
  remainingHours: number;
  remaningMinutes: number;
  bossName: string;
  spawnTime: number;
  zone: string;
};

const CreateBossEmbed = ({
  remainingHours,
  remaningMinutes,
  bossName,
  spawnTime,
  zone,
}: CreateBossEmbedProps) => {
  const embed = new EmbedBuilder()
    .setTitle("Next World Boss Event")
    .setDescription(
      `The next World boss will spawn in ${remainingHours} hours and ${remaningMinutes} minutes`
    )
    .addFields(
      { name: "Boss Name: ", value: bossName },
      { name: "Spawn Time: ", value: time(spawnTime) },
      { name: "Spawn Zone: ", value: zone }
    )
    .setColor(0x8e44ad);

  return embed;
};

export default CreateBossEmbed;
