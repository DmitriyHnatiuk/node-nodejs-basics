const parseArgs = () => {
  const [, , ...rest] = process.argv;

  const _result = rest.reduce(
    (acc, item, index) =>
      item.match(/^--/)
        ? `${acc}${item.replace(/^--?/, '')} is ${rest[index + 1]} \n`
        : acc,
    ''
  );

  console.log(_result);
};

parseArgs();
