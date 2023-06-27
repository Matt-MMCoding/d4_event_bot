const getBossInfo = async () => {
  const res = await fetch("https://d4armory.io/api/events/recent");
  const data = await res.json();

  return {
    bossName: data.boss.nextExpectedName,
    bossTime: data.boss.expected,
    bossZone: data.boss.zone,
  };
};

export default getBossInfo;
