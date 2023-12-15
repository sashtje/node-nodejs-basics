const parseEnv = () => {
  const rss_envs = [];

  for (let key in process.env) {
    if (key.startsWith('RSS_')) {
      rss_envs.push(`${key}=${process.env[key]}`);
    }
  }

  console.log(rss_envs.join('; '));
};

parseEnv();
