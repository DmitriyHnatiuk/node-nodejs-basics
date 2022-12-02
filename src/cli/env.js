const parseEnv = () => {
  console.log(
    Object.entries(process.env)
      .reduce(
        (acc, _env) =>
          _env[0].includes('RSS_') ? [...acc, _env.join('=')] : acc,
        []
      )
      .join('; ')
  );
};

parseEnv();
