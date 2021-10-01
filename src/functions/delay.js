/**
 * @param {Number} sec Sleep time (seconds)
 */
 const delay = (sec) => {
    if (!sec) throw new TypeError("Time is null, put time in delay function!");
    if(isNaN(sec)) throw new TypeError("Time has to be an integer!")
    return new Promise((resolve) => setTimeout(resolve, 1000 * sec));
 };
 
 module.exports = delay;