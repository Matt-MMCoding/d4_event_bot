import { event, getTimeRemaining } from "../utils";
import keys from "../keys";
import { getBossInfo } from "../api";
import { CreateBossEmbed } from "../embed";

export default event("ready", async ({ log }, client) => {
  log(`Logged in as ${client.user.tag}`);

  const chn = client.channels.cache.get(keys.globalEventsChannelId);

  if (chn?.isTextBased()) {
    setInterval(async () => {
      try {
        await getBossInfo().then(({ bossName, bossTime, bossZone }) => {
          const { remainingHours, remaningMinutes } =
            getTimeRemaining(bossTime);

          if (remainingHours < 1) {
            if (
              (remaningMinutes <= 30 && remaningMinutes > 25) ||
              (remaningMinutes <= 6 && remaningMinutes > 1)
            ) {
              chn.send({
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
            }
          }
        });
      } catch (error) {
        console.error(error);
      }
      // Check API every 5 minutes
    }, 300000);
  }
});
