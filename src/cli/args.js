const parseArgs = () => {
  const args = [];

  const argsArr = process.argv.slice(2);
  for (let i = 1; i < argsArr.length; i += 2) {
    args.push(`${argsArr[i - 1].slice(2)} is ${argsArr[i]}`);
  }

  console.log(args.join(', '));
};

parseArgs();
