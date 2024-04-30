function bindToAnArg(func, arg) {
  const bound = func.bind(null, arg)
  return bound
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = bindToAnArg;
