const substring = () => {
  const zh = "我是一个葱".substring(0, 3);
  const en = "i hava a dream".substring(0, 3);
  console.log("substring -> zh", zh); //输出：substring -> zh 我是一
  console.log("substring -> en", en); //输出：substring -> en i h
};
substring();
