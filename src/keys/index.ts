import { Keys } from "../types";

const keys: Keys = {
  clientToken: process.env.CLIENT_TOKEN ?? "nil",
  guildId: process.env.GUILD_ID ?? "nil",
};

if (Object.values(keys).includes("nil")) {
  throw new Error("Environment variable is missing");
}

export default keys;
