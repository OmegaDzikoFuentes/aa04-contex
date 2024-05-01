function boundFuncTimer(obj, func, delay) {

  const bound = func.bind(obj);

  setTimeout(() => {

    bound();

  }, delay);

}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = boundFuncTimer;
