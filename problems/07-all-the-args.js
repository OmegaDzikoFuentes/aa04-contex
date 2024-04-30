function allTheArgs(func, ...args) {


const boundFunc = func.bind(null, ...args)

  return boundFunc;

}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = allTheArgs;
