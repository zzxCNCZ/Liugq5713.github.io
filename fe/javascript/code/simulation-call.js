Function.prototype.mycall = function (context) {
  var context = context || window;
  context.fn = this;

  var args = [];
  for (var i = 1, len = arguments.length; i < len; i++) {
    args.push("arguments[" + i + "]");
  }
  const res = eval("context.fn(" + args + ")");

  delete context.fn;
  return res;
};

var foo = {
  value: 1
};

function bar() {
  console.log(this.value);
}

bar.mycall(foo); // 1
