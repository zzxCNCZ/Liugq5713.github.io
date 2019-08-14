const wait = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("error sssss");
    }, 3000);
  });
};

const main = async () => {
  try {
    console.log("begin");
    await wait();
  } catch (err) {
    console.log("sss", err);
  }
};

main();
